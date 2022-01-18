import { useState, useEffect } from "react"
import { Container, DashboardContainer, Header, HeaderText } from "./App.styles"
import { Item } from "./types/Item"
import { Category } from "./types/Category"
import { categories } from "./data/categories"
import { items } from "./data/items"
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter"
import TableArea from "./components/TableArea/TableArea"

const App = () => {
  const [list, setList] = useState(items)
  // Em list, como meu items já está tipado com Item[], o useState já fica tipado.
  // Não é necessário fazer useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  console.log(filteredList)
  return (
    <Container>
      <Header>
        <HeaderText>Trading Dashboard</HeaderText>
      </Header>
      <DashboardContainer>
        {/* Área de Informações */}

        {/* Área de Inclusão de Dados */}

        {/* Tabela de Resultados  */}
        <TableArea list={filteredList}/>
      </DashboardContainer>
    </Container>
  )
}

export default App
