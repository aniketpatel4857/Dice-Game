import styled from "styled-components";

export const Button = styled.button`
  background-color: transparent;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border: 1px solid black;
  cursor: pointer;
  border-radius: 5px;
  transition: ease-in-out 0.2s;

  &:hover {
    background-color: #000000;
  transition: ease-in-out 0.2s;
  /* transition: ease-in-out; */

  }


  &:hover {
    background-color: #000000;
    border: 1px solid black;
    /* transition: ease-in-out; */
  transition: ease-in-out 0.2s;

    color: white;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;

  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
