import styled from "styled-components"

export const TableLine = styled.tr`

`

export const TableColumn = styled.td`
  padding: 10px 0;
  font-weight: 500;
`

export const CategoryWrap = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 4px;
  color: #FFF;
  background-color: ${props => props.color};
`

export const ValueWrap = styled.div<{ color: string }>`
  color: ${props => props.color};
`