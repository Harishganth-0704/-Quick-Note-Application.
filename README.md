<div align="center">

# 📝 QuickNote

### A beautiful, full-stack note-taking application

[![Python](https://img.shields.io/badge/Python-3.x-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://python.org)
[![Flask](https://img.shields.io/badge/Flask-3.0-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com)
[![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://sqlite.org)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Render-46E3B7?style=for-the-badge)](https://quick-note-app.onrender.com)
[![GitHub stars](https://img.shields.io/github/stars/Harishganth-0704/-Quick-Note-Application.?style=for-the-badge&color=yellow)](https://github.com/Harishganth-0704/-Quick-Note-Application./stargazers)
[![GitHub license](https://img.shields.io/github/license/Harishganth-0704/-Quick-Note-Application.?style=for-the-badge)](LICENSE)

<br/>

> **Capture your thoughts effortlessly** — A modern note-taking app with a stunning glassmorphism UI, backed by a Python Flask REST API and SQLite database.

</div>

---

## ✨ Features

- 🎨 **Modern Glassmorphism UI** — Stunning dark theme with animated background blobs
- 💾 **Persistent Storage** — Notes saved to SQLite database, survive page refresh
- ⚡ **Real-time Updates** — Notes appear instantly without page reloads
- 📱 **Fully Responsive** — Works perfectly on desktop, tablet, and mobile
- 🔒 **No localStorage** — All data stored securely on the backend
- 🃏 **Card Layout** — Notes displayed in a beautiful grid card format
- ⏱️ **Timestamps** — Every note shows when it was created

---

## 🖥️ Live Demo

👉 **[https://quick-note-app.onrender.com](https://quick-note-app.onrender.com)**

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | HTML5, CSS3, Vanilla JavaScript |
| **Backend** | Python, Flask |
| **Database** | SQLite3 |
| **Fonts** | Google Fonts (Outfit) |
| **Icons** | Font Awesome 6 |
| **Deployment** | Render.com |

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/notes` | Fetch all saved notes |
| `POST` | `/add-note` | Save a new note |

### Example Request
```json
POST /add-note
Content-Type: application/json

{
  "note": "This is my first note!"
}
```

### Example Response
```json
{
  "id": 1,
  "note": "This is my first note!",
  "created_at": "2026-05-28T12:00:00Z"
}
```

---

## 📁 Project Structure

```
Quick Note Application/
├── backend/
│   ├── app.py              ← Flask REST API & SQLite setup
│   └── notes.db            ← SQLite database (auto-generated)
├── frontend/
│   ├── index.html          ← Main HTML structure
│   ├── style.css           ← Glassmorphism UI & animations
│   └── script.js           ← Frontend logic & Fetch API calls
├── Procfile                ← Render.com deployment config
├── requirements.txt        ← Python dependencies
├── .gitignore
└── README.md
```

---

## 🚀 Run Locally

### Prerequisites
- Python 3.x installed → [python.org](https://python.org)
- Git installed

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/Harishganth-0704/-Quick-Note-Application.
cd "-Quick-Note-Application."

# 2. Install dependencies
pip install -r requirements.txt

# 3. Start the Flask server
cd backend
python app.py
```

### 4. Open in browser
```
http://127.0.0.1:5001
```

> The `notes.db` SQLite database is created automatically on first run.

---

## 🗄️ Database Schema

```sql
CREATE TABLE notes (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    note       TEXT    NOT NULL,
    created_at TEXT    NOT NULL
);
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m "Add my feature"`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

Made with ❤️ by [Harishganth](https://github.com/Harishganth-0704)

⭐ **Star this repo if you found it helpful!** ⭐

</div>
