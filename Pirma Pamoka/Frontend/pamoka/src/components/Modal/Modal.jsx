import React from "react";
import style from "./Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div onClick={onClose} className={style.modal}>
      <h1>!!! Planai pasiekti !!!</h1>
    </div>
  );
}
