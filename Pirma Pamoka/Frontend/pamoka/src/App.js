import React, { useState } from "react";
import Modal from "./components/Modal/Modal.jsx";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div>
      <h1>Naujakas pramazintas ?</h1>
      <button onClick={handleOpen}>Atidaryti atsakyma</button>
      <button onClick={handleClose}>Uždaryti atsakyma</button>
      <Modal isOpen={open} onClose={handleClose} />
    </div>
  );
}

export default App;
