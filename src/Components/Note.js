import React from "react";

const Note = ({ title, body, onDelete, note }) => {
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
      <div>
        <button className="btn">
          <i style={{ color: "gray" }} class="fas fa-edit"></i>
        </button>
        <button className="btn" onClick={() => onDelete(note.id)}>
          <i style={{ color: "gray" }} class="fas fa-trash-alt"></i>
        </button>
      </div>
      <h5 className="">{title}</h5>
      <p style={{ whiteSpace: "pre-wrap" }} className="">
        {body}
      </p>
    </div>
  );
};

export default Note;
