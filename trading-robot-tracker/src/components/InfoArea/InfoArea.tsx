import { formatCurrentMonth } from "../../helpers/dateFilter"
import ResumeItem from "../ResumeItem/ResumeItem"
import {
  Container,
  LeftArrow,
  MonthArea,
  MonthTitle,
  ResumeArea,
  RightArrow,
} from "./InfoArea.styles"

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
  income: number
  expense: number
}

const InfoArea = ({ currentMonth, onMonthChange, income, expense }: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split("-")
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split("-")
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <Container>
      <MonthArea>
        <LeftArrow onClick={handlePrevMonth} />
        <MonthTitle> {formatCurrentMonth(currentMonth)} </MonthTitle>
        <RightArrow onClick={handleNextMonth} />
      </MonthArea>

      <ResumeArea>
      <ResumeItem title="Lucro" value={income} />
      <ResumeItem title="Prejuízo" value={expense} />
      <ResumeItem title="Resultado Líq" value={income - expense} />
      </ResumeArea>
    </Container>
  )
}

export default InfoArea
