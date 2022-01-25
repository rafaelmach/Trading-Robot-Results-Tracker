import styled from "styled-components"

export const Container = styled.div`
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  border-radius: 3px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`
export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`
export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
  color: #000;
`
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
`
export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  
  option {
    font-weight: 500;
  }
`
export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: none;
  border-radius: 5px;
  background-color: #05386b;
  color: #fff;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: white;
  }
`
