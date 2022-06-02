import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import * as classes from "common/styles";

interface Props {
  open: boolean;
  adults: number;
  kids: number;
  babys: number;
  handleClose: () => void;
  handleClickAdults: (e) => void;
  handleClickKids: (e) => void;
  handleClickBabys: (e) => void;
  handleInsertOcupation: () => void;
}

export const ModalComponent = (props: Props) => {
  const {
    open,
    adults,
    kids,
    babys,
    handleClose,
    handleClickAdults,
    handleClickKids,
    handleClickBabys,
    handleInsertOcupation,
  } = props;

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={classes.modalStyle}>
          Habitación 1
          <div className={classes.modalContent}>
            <div className={classes.modalDatas}>
              <div>
                <span className={classes.field}>Adultos</span>
                <button onClick={handleClickAdults}>+</button>
                <span id="number">{adults}</span>
                <button onClick={handleClickAdults}>-</button>
              </div>
              <div className={classes.kids}>
                <span className={classes.field}>Niños</span>
                <button onClick={handleClickKids}>+</button>
                <span id="number">{kids}</span>
                <button onClick={handleClickKids}>-</button>
              </div>
              <div>
                <span className={classes.field}>Bebés</span>
                <button onClick={handleClickBabys}>+</button>
                <span id="number">{babys}</span>
                <button onClick={handleClickBabys}>-</button>
              </div>
            </div>
            <span
              className={classes.uploadButton}
              onClick={handleInsertOcupation}
            >
              +
            </span>
          </div>
        </Box>
      </Modal>
    </>
  );
};
