import { css } from "@emotion/css";
import * as img from "assets";

export const main = css`
  display: flex;
  width: max-content;
  flex-direction: column;
  align-items: center;
`;

export const container = css`
  display: flex;
  background-image: url(${img.img});
  padding: 3rem;
`;

export const containerDatas = css`
  display: flex;
  align-items: flex-end;
  background: white;
  padding: 2rem;
  border-radius: 20rem;
  z-index: +1;

  & > div {
    display: flex;
    flex-direction: column;
    & > span {
      margin-bottom: 0.3rem;
    }
  }
`;

export const inputDate = css`
  border: none;
  font-size: 1rem;
  border-right: 1px solid black;
  padding-right: 1rem;
  margin-right: 1rem;
`;
export const inputOcupation = css`
  border: none;
  font-size: 1rem;
  border-right: 1px solid black;
  padding-right: 1rem;
  margin-right: 1rem;
`;
export const modalStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  width: "max-content",
  p: 6,
};
export const modalContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const modalDatas = css`
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.4rem;
  margin: 0.1rem 0;
  font-size: 1.2rem;
  & > div {
    width: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & button {
    background-color: white;
    border: none;
    color: #b18f3a;
  }
  & span#number {
    color: #b18f3a;
    font-weight: bold;
  }
`;

export const field = css`
  font-size: 0.8rem;
  color: black;
`;

export const kids = css`
  border-left: 1px solid #b18f3a;
  border-right: 1px solid #b18f3a;
`;

export const uploadButton = css`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 1rem;
  color: #b18f3a;
  border: 1px solid #b18f3a;
  border-radius: 10px;
`;

export const promocode = css`
  border: none;
  height: 1.5rem;
`;

export const bookButton = css`
  & > button {
    margin-left: 1rem;
    color: white;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
  }
  & span {
    background-color: #b18f3a;
    z-index: -1;
  }
`;
