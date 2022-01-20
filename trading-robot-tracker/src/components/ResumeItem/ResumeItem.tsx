import { Container, ResumeValues, Title } from "./ResumeItem.styles"

type Props = {
  title: string
  value: number
}


const ResumeItem = ({ title, value }: Props) => {
  return <Container>
    <Title>{title}</Title>
    <ResumeValues>R$ {value}</ResumeValues>
  </Container>
}

export default ResumeItem
