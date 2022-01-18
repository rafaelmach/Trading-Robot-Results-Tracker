import { formatCurrentMonth } from "../../helpers/dateFilter"
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
}

const InfoArea = ({ currentMonth, onMonthChange }: Props) => {
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

      <ResumeArea>RESUME AREA</ResumeArea>
    </Container>
  )
}

export default InfoArea
