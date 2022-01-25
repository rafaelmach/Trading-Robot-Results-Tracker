import styled from "styled-components"
import { BsFillCaretLeftSquareFill } from "react-icons/bs"
import { BsFillCaretRightSquareFill } from "react-icons/bs"

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 3px;
  padding: 20px;
  margin-top: -20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
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
  font-weight: 500;
`

export const ResumeArea = styled.div`
  flex: 2;
  display: flex;
  color: #000;
  padding-right: 50px;
  `
