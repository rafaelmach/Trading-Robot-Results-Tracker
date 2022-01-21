import { Table, TableHeadColumn } from "./TableArea.styles"
import { Item } from "../../types/Item"
import TableItem from "../TableItem/TableItem"
// import { TableItem } from "../TableItem/TableItem"

type Props = {
  list: Item[]
}

const TableArea = ({ list }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableHeadColumn width={130}>Data</TableHeadColumn>
          <TableHeadColumn width={130}>Operação</TableHeadColumn>
          <TableHeadColumn>Nome do Robô</TableHeadColumn>
          <TableHeadColumn width={480}>Resultado</TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => (
          <TableItem key={index} item={item}/>
        ))}
      </tbody>
    </Table>
  )
}

export default TableArea
