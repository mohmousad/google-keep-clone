import React, { useState, useEffect } from "react";
import Note from "./Note";

const Notes = ({ notes, onDelete }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center">
      {notes.map((note) => (
        <Note
          title={note.title}
          body={note.body}
          note={note}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default Notes;
