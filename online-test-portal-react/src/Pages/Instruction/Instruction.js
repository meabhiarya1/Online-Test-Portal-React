import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Instruction.module.css"; // Import CSS module

const Instruction = () => {
  const navigate = useNavigate();

  const handleButton = () => {
    navigate("/home");
  };

  return (
    <div className={styles.container}>
      <div className={styles.instruc}>Instructions</div>
      <div className={styles.instructions}>
        <h5>
          1. Check the examination datasheet carefully. Make sure you know the
          correct date, time, and locations of your exams.
        </h5>
        <h5>
          2. Bring your Student Admit Card and ID Card both during the
          examination. You will not be allowed to enter the examination hall
          without these.
        </h5>
        <h5>
          3. Do not bring any unauthorized material (e.g., written notes, notes
          in dictionaries, paper, and sticky tape eraser etc.). Avoid taking
          Pencil cases and glasses cases to your desks. These will be checked
          and confiscated.
        </h5>
        <h5>
          4. Answer sheets may be given to you 10 minutes prior to the start of
          the examination, so that you can check any discrepancy in the answer
          sheet. Read the instructions written on the front sheet of your answer
          sheet and fill the data carefully. Do not write name, roll no. etc on
          the other pages of answer sheet except the front page.
        </h5>
        <h5>
          5. Students are instructed to cross the blank sheets before handing
          over the answer sheet to the invigilator.
        </h5>

        <div className={styles.checkbox}>
          <input className={styles.inputCheckbox} type="checkbox" required />
          <h3>
            <label>Read All Instructions Carefully</label>
          </h3>
        </div>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <button className={styles.button} onClick={handleButton}>
          Start Test
        </button>
      </div>
    </div>
  );
};

export default Instruction;
