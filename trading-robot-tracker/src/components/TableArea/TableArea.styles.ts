import styled from "styled-components"

export const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;
  color: #000;
  margin-top: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`

export const TableHeadColumn = styled.th<{ width?: number }>`
  width: ${(props) => (props.width ? `${props.width}px` : "auto")};
  padding: 10px 0;
  text-align: left;
`
