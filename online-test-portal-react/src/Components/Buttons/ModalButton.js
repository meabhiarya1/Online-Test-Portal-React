import React from "react";

const ModalButton = () => {
  return (
    <div class="m-4 d-flex align-content-center justify-content-center">
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Final Submit
      </button>
    </div>
  );
};

export default ModalButton;
