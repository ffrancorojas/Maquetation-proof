import React from "react";
import axios from "axios";
import Button from "@mui/material/Button";

import * as classes from "common/styles";
import { ModalComponent } from "./modal.component";

export const SectionComponent = () => {
  const [startDate, setStartDate] = React.useState<string | null>(
    new Date().toISOString().split("T")[0]
  );
  const minValue = new Date();
  minValue.setDate(minValue.getDate() + 1);
  const [endDate, setEndDate] = React.useState<string | null>(
    minValue.toISOString().split("T")[0]
  );
  const [ocupation, setOcupation] = React.useState<string>(
    "1 Habitación / 2 - 0"
  );
  const [open, setOpen] = React.useState(false);
  const [adults, setAdults] = React.useState(1);
  const [kids, setKids] = React.useState(0);
  const [babys, setBabys] = React.useState(0);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClickAdults = (e) => {
    e.target.outerText === "+"
      ? setAdults(adults + 1)
      : adults > 0
      ? setAdults(adults - 1)
      : setAdults(0);
  };
  const handleClickKids = (e) => {
    e.target.outerText === "+"
      ? setKids(kids + 1)
      : kids > 0
      ? setKids(kids - 1)
      : setKids(0);
  };
  const handleClickBabys = (e) => {
    e.target.outerText === "+"
      ? setBabys(babys + 1)
      : babys > 0
      ? setBabys(babys - 1)
      : setBabys(0);
  };

  const handleInsertOcupation = () => {
    setOcupation(`1 Habitación / ${adults} - ${kids + babys}`);
    setOpen(false);
  };

  const handleUpload = () => {
    axios
      .post("/prueba”", {
        startDate: new Date(startDate).toLocaleDateString(),
        endDate: new Date(endDate).toLocaleDateString(),
        adults,
        kids,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <section className={classes.container}>
      <div className={classes.containerDatas}>
        <div>
          <span>Entrada</span>
          <input
            value={startDate}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className={classes.inputDate}
            onChange={(e) => {
              console.log(e.target.value);
              setStartDate(e.target.value.toString());
            }}
          />
        </div>
        <div>
          <span>Salida</span>
          <input
            value={endDate}
            type="date"
            min={minValue.toISOString().split("T")[0]}
            className={classes.inputDate}
            onChange={(e) => {
              console.log(e.target.value.toString());
              setEndDate(e.target.value.toString());
            }}
          />
        </div>
        <div>
          <span>Ocupación</span>
          <input
            value={ocupation}
            type="text"
            className={classes.inputOcupation}
            onClick={handleOpen}
            readOnly={true}
          />
        </div>
        <ModalComponent
          open={open}
          adults={adults}
          kids={kids}
          babys={babys}
          handleClose={handleClose}
          handleClickAdults={handleClickAdults}
          handleClickKids={handleClickKids}
          handleClickBabys={handleClickBabys}
          handleInsertOcupation={handleInsertOcupation}
        />

        <input
          type="text"
          className={classes.promocode}
          defaultValue={"Promocode"}
        />
        <div className={classes.bookButton}>
          <Button onClick={handleUpload}>Reservar</Button>
        </div>
      </div>
    </section>
  );
};
