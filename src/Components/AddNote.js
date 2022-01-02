import { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, body });
    const frm = document.querySelector(".formAddNote");
    const tx = document.getElementsByTagName("textarea");
    frm.reset();
  };

  // Text area auto resize https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize
  const txHeight = 64;
  const tx = document.getElementsByTagName("textarea");

  for (let i = 0; i < tx.length; i++) {
    if (tx[i].value == "") {
      tx[i].setAttribute(
        "style",
        "height:" + txHeight + "px;overflow-y:hidden;"
      );
    } else {
      tx[i].setAttribute(
        "style",
        "height:" + tx[i].scrollHeight + "px;overflow-y:hidden;"
      );
    }
    tx[i].addEventListener("input", OnInput, false);
  }

  function OnInput(e) {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + "px";
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <form className="formAddNote" onSubmit={onSubmit}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "6rem" }}
      >
        <div className="input border border-info rounded input w-50 m-3 p-2">
          <input
            className="titleInput"
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          {/*<div
            className="bodyInput p-2"
            role="textbox"
            contentEditable="true"
            onChange={(e) => setBody(e.target.value)}
          ></div>*/}
          <textarea
            className="bodyInput p-2"
            placeholder="Body"
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        <input type="submit" value="Add Note" className="btn btn-info" />
      </div>
    </form>
  );
};

export default AddNote;
