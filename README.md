# 📝 Quick Note Application

A beautiful, simple, and responsive full-stack note-taking application built with Python Flask and vanilla web technologies. Capture and organize your thoughts effortlessly!

## ✨ Features
- **Modern Glassmorphism UI**: A visually stunning interface with micro-animations and gradients.
- **Responsive Design**: Works perfectly on both desktop and mobile devices.
- **RESTful API**: Clean backend architecture using Python Flask.
- **Persistent Storage**: Notes are safely stored in a local SQLite database.
- **Real-time UI Updates**: Notes load instantly without page reloads using asynchronous JavaScript fetch APIs.

## 🛠️ Tech Stack
**Frontend:**
- HTML5
- CSS3 (Custom Variables, Flexbox/Grid, Animations)
- Vanilla JavaScript (Fetch API, DOM Manipulation)

**Backend:**
- Python 3.x
- Flask (Web Framework)
- SQLite3 (Database)
- flask-cors

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites
Make sure you have Python installed on your system. You can download it from [python.org](https://www.python.org/).

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Harishganth-0704/-Quick-Note-Application.git
   cd -Quick-Note-Application
   ```

2. **Install dependencies:**
   It is recommended to use a virtual environment, but you can also install directly:
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the backend server:**
   Navigate into the `backend` folder and start the Flask server:
   ```bash
   cd backend
   python app.py
   ```
   *(This will automatically create the `notes.db` database file on the first run).*

4. **Open the App:**
   Open your browser and navigate to:
   [http://127.0.0.1:5001](http://127.0.0.1:5001)

## 📁 Project Structure

```text
Quick Note Application/
├── backend/
│   ├── app.py              # Flask REST API and database configuration
│   └── notes.db            # SQLite database (auto-generated)
├── frontend/
│   ├── index.html          # Main HTML structure
│   ├── style.css           # Premium styling and animations
│   └── script.js           # Frontend logic and API integration
└── requirements.txt        # Python backend dependencies
```

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to check the issues page if you want to contribute.

## 📝 License
This project is open source and available under the [MIT License](LICENSE).
