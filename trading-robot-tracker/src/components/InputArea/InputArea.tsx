import { useState } from "react"
import { Item } from "../../types/Item"
import { categories } from "../../data/categories"
import {
  Button,
  Container,
  Input,
  InputLabel,
  InputTitle,
  Select,
} from "./InputArea.styles"

type Props = {
  onAdd: (item: Item) => void
}

const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("")
  const [categoryField, setCategoryField] = useState("")
  const [titleField, setTitleField] = useState("")
  const [valueField, setValueField] = useState(0)

  let categoryKeys: string[] = Object.keys(categories)

  const handleAddEvent = () => {
    let erros: string[] = []

    if (isNaN(new Date(dateField).getTime())) {
      erros.push("Data inválida!")
    }
    if (!categoryKeys.includes(categoryField)) {
      erros.push("Categoria inválida!")
    }
    if (titleField === "") {
      erros.push("Título vazio!")
    }
    if (valueField <= 0) {
      erros.push("Valor inválido")
    }

    if (erros.length > 0) {
      alert(erros.join("\n"))
    } else {
      onAdd({
        date: new Date(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      })
      clearFields()
    }
  }

  const clearFields = () => {
    setDateField("")
    setCategoryField("")
    setTitleField("")
    setValueField(0)
  }

  return (
    <Container>
      <InputLabel>
        <InputTitle> Data </InputTitle>
        <Input
          type="date"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Operação</InputTitle>
        <Select
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          <>
            <option></option>
            {categoryKeys.map((key, index) => (
              <option key={index} value={key}>
                {categories[key].title}
              </option>
            ))}
          </>
        </Select>
      </InputLabel>
      <InputLabel>
        <InputTitle>Nome do Robô</InputTitle>
        <Input
          type="text"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>Resultado</InputTitle>
        <Input
          type="number"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </InputLabel>
      <InputLabel>
        <InputTitle>&nbsp;</InputTitle>
        <Button onClick={handleAddEvent}>Adicionar</Button>
      </InputLabel>
    </Container>
  )
}

export default InputArea
