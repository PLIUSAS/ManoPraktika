import React from "react";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div onClick={onClose}>
      <h1> !!! Naujakas nepramazintas !!!</h1>
    </div>
  );
}
