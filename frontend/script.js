const API_BASE = 'http://127.0.0.1:5001';

document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const saveBtn = document.getElementById('save-btn');
    const notesContainer = document.getElementById('notes-container');
    const noteCount = document.getElementById('note-count');

    // Fetch and display notes on load
    fetchNotes();

    saveBtn.addEventListener('click', async () => {
        const text = noteInput.value.trim();
        if (!text) return;

        // Visual feedback
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Saving...';
        saveBtn.disabled = true;

        try {
            const isLocal = window.location.protocol === 'file:';
            const url = isLocal ? `${API_BASE}/add-note` : '/add-note';

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ note: text })
            });

            if (response.ok) {
                noteInput.value = '';
                await fetchNotes(); // Refresh list
            } else {
                console.error('Failed to save note');
                alert('Failed to save note.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error saving note. Ensure backend is running.');
        } finally {
            saveBtn.innerHTML = originalText;
            saveBtn.disabled = false;
        }
    });

    async function fetchNotes() {
        try {
            const isLocal = window.location.protocol === 'file:';
            const url = isLocal ? `${API_BASE}/notes` : '/notes';
            
            const response = await fetch(url);
            const notes = await response.json();
            
            renderNotes(notes);
        } catch (error) {
            console.error('Error fetching notes:', error);
            notesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <p>Could not load notes. Is the backend running?</p>
                </div>
            `;
        }
    }

    function renderNotes(notes) {
        noteCount.textContent = notes.length;
        
        if (notes.length === 0) {
            notesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fa-regular fa-folder-open"></i>
                    <p>No notes yet. Start writing above!</p>
                </div>
            `;
            return;
        }

        notesContainer.innerHTML = '';
        notes.forEach(note => {
            const date = new Date(note.created_at);
            const formattedDate = date.toLocaleDateString(undefined, { 
                year: 'numeric', month: 'short', day: 'numeric',
                hour: '2-digit', minute: '2-digit'
            });

            const card = document.createElement('div');
            card.className = 'note-card';
            
            // Basic HTML escaping
            const escapeHTML = (str) => str.replace(/[&<>'"]/g, 
                tag => ({
                    '&': '&amp;',
                    '<': '&lt;',
                    '>': '&gt;',
                    "'": '&#39;',
                    '"': '&quot;'
                }[tag])
            );

            card.innerHTML = `
                <div class="note-text">${escapeHTML(note.note)}</div>
                <div class="note-meta">
                    <i class="fa-regular fa-clock"></i>
                    <span>${formattedDate}</span>
                </div>
            `;
            notesContainer.appendChild(card);
        });
    }
});
