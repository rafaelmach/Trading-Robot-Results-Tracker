import { Container, ResumeValues, Title } from "./ResumeItem.styles"

type Props = {
  title: string
  value: number
  color?: string
}


const ResumeItem = ({ title, value, color }: Props) => {
  return <Container>
    <Title>{title}</Title>
    <ResumeValues color={color}>R$ {value}</ResumeValues>
  </Container>
}

export default ResumeItem
