import { useState, useEffect } from "react"
import { Container, DashboardContainer, Header, HeaderText } from "./App.styles"
import { Item } from "./types/Item"
// import { Category } from "./types/Category"
import { categories } from "./data/categories"
import { items } from "./data/items"
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter"
import TableArea from "./components/TableArea/TableArea"
import InfoArea from "./components/InfoArea/InfoArea"
import InputArea from "./components/InputArea/InputArea"

const App = () => {
  const [list, setList] = useState(items)
  // Em list, como meu items já está tipado com Item[], o useState já fica tipado.
  // Não é necessário fazer useState<Item[]>(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value
      } else {
        incomeCount += filteredList[i].value
      }
    }

    setIncome(incomeCount)
    setExpense(expenseCount)
  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  const handleAddItem = (item: Item) => {
    let newList = [...list]
    newList.push(item)
    setList(newList)
  }

  return (
    <Container>
      <Header>
        <HeaderText>Trading Dashboard</HeaderText>
      </Header>
      <DashboardContainer>
        {/* Área de Informações */}
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        {/* Área de Inclusão de Dados */}
        {/* <InputArea onAdd={handleAddItem} /> */}

        {/* Tabela de Resultados  */}
        <TableArea list={filteredList} />
      </DashboardContainer>
    </Container>
  )
}

export default App
