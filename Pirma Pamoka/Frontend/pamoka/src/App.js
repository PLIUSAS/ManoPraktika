import React, { useState } from "react";
import Modal from "./components/Modal/Modal.jsx";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="App">
      <Modal isOpen={open} onClose={handleClose} />
      {open ? null : <h1>Naujakas pramazintas ?</h1>}
      {/* {!open ? null : <h1> !!! Naujakas nepramazintas !!!</h1>} */}
      {open ? null : <button onClick={handleOpen}>Atidaryti atsakyma</button>}
      {!open ? null : <button onClick={handleClose}>Uždaryti atsakyma</button>}
    </div>
  );
}

export default App;
