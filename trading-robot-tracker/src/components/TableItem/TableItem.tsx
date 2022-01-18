import { categories } from "../../data/categories"
import { formatDate } from "../../helpers/dateFilter"
import { Item } from "../../types/Item"
import { CategoryWrap, TableColumn, TableLine, ValueWrap } from "./TableItem.styles"


type Props = {
  item: Item
}


const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>
        {formatDate(item.date)}
      </TableColumn>
      <TableColumn>

        <CategoryWrap color={categories[item.category].color}>
        {categories[item.category].title}
        </CategoryWrap>

        </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>

          <ValueWrap color={categories[item.category].expense ? "red" : "green" }>
        R$ {item.value}
            
          </ValueWrap>
        </TableColumn>
    </TableLine>
  )
}

export default TableItem
