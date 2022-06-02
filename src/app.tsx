import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import * as classes from "common/styles";

import axios from "axios";
import { ModalComponent } from "./components/modal.component";
import { SectionComponent } from "components/secction.component";

export const App = () => {
  return (
    <main className={classes.main}>
      <h2>Selecciona:</h2>
      <SectionComponent />
    </main>
  );
};
