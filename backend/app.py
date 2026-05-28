from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import sqlite3
import os
from datetime import datetime

# Setup paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FRONTEND_DIR = os.path.join(BASE_DIR, '..', 'frontend')
DB_PATH = os.path.join(BASE_DIR, 'notes.db')

app = Flask(__name__, static_folder=FRONTEND_DIR)
CORS(app)

def init_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            note TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

init_db()

@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(app.static_folder, path)

@app.route('/notes', methods=['GET'])
def get_notes():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('SELECT id, note, created_at FROM notes ORDER BY created_at DESC')
    notes = [{'id': row[0], 'note': row[1], 'created_at': row[2]} for row in cursor.fetchall()]
    conn.close()
    return jsonify(notes)

@app.route('/add-note', methods=['POST'])
def add_note():
    data = request.json
    note = data.get('note')
    if not note:
        return jsonify({'error': 'Note is required'}), 400
    
    created_at = datetime.utcnow().isoformat() + "Z"
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute('INSERT INTO notes (note, created_at) VALUES (?, ?)', (note, created_at))
    conn.commit()
    new_id = cursor.lastrowid
    conn.close()
    
    return jsonify({'id': new_id, 'note': note, 'created_at': created_at}), 201

if __name__ == '__main__':
    app.run(debug=True, port=5001)
