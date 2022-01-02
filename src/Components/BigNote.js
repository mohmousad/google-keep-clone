import React from "react";

const Note = ({ note }) => {
  return (
    <div
      className="d-flex flex-fill card m-3 overflow-hidden  border-info border-1 p-2 px-3"
      style={{
        minWidth: "15rem",
        maxWidth: "17rem",
        minHeight: "15rem",
        maxHeight: "20rem",
        cursor: "pointer",
      }}
    >
      <h5 className="">{note.title}</h5>
      <p style={{ whiteSpace: "pre-wrap" }} className="">
        {note.body}
      </p>
    </div>
  );
};

export default Note;
