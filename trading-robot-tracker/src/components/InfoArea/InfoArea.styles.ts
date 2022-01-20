import styled from "styled-components"
import { BsFillCaretLeftSquareFill } from "react-icons/bs"
import { BsFillCaretRightSquareFill } from "react-icons/bs"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 4px;
  padding: 20px;
  margin-top: -20px;
`
export const MonthArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

export const LeftArrow = styled(BsFillCaretLeftSquareFill)`
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
  color: #05386b;
`

export const RightArrow = styled(BsFillCaretRightSquareFill)`
  width: 25px;
  height: 25px;
  text-align: center;
  cursor: pointer;
  color: #05386b;
`

export const MonthTitle = styled.div`
  flex: 1;
  text-align: center;
  color: #05386b;
`

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  color: #000;
`
