import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNote from "./Components/AddNote";
import Header from "./Components/Header";
import Notes from "./Components/Notes";
import BigNote from "./Components/BigNote";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const getNotes = async () => {
      const notesFromServer = await fetchNotes();
      setNotes(notesFromServer);
    };
    getNotes();
  }, []);

  const fetchNotes = async () => {
    const res = await fetch("http://localhost:5000/notes");
    const data = await res.json();
    return data;
  };

  const addNoteReq = async (note) => {
    const res = await fetch("http://localhost:5000/notes/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(note),
    });
    const data = await res.json();
    setNotes([...notes, data]);
  };

  const deleteNote = async (id) => {
    await fetch(`http://localhost:5000/notes/${id}`, {
      method: "Delete",
    });
    setNotes(notes.filter((note) => note.id !== id));
  };

  const bigNoteHandler = (id) => {
    const aa = notes.filter((note) => note.id !== id);
  };

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddNote onAdd={addNoteReq} />
                <Notes notes={notes} onDelete={deleteNote} />
              </>
            }
          />
          {/*<Route
            path="/notes/:id"
            element={
              <>
                bigNoteHandler(id)
                <BigNote note={this.aa} />
              </>
            }
          />*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
