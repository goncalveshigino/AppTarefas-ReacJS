import {
  VStack,
  Text,
  Input,
  HStack,
  Spacer,
  TableContainer,
  Table,
  Tfoot,
  Th,
  Tr,
  Tbody,
  Td,
  Thead,
} from "@chakra-ui/react";
import { useState } from "react";
import { Tarefa } from "./types/tarefa";
import { TarefaRepository } from "./repositories/TarefaRepository";

export default function App(): JSX.Element {

  const [titulo, setTitulo] = useState<string>("");
  const [tempoDeEstudo, setTempoDeEstudo] = useState<string>("")
  const [tempoDeDescaso, setTempoDeDescaso] = useState<string>("")
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false)


  const criarTarefa = async () => {
    setIsLoading(true)
    let tarefa: Tarefa = {
       id: "", 
       titulo: titulo, 
       tempoDeEstudo: tempoDeEstudo, 
       tempoDeDescaso: tempoDeDescaso 
    }

    try {
      const result =  await TarefaRepository.shared.criarTarefa(tarefa)
      setTarefas((prev) => [...prev, result])
      setIsLoading(false)
      clearFields()
    } catch (error) {
      setIsLoading(false)
       throw error
    }
  }

  const clearFields = () => {
    setTitulo("")
    setTempoDeDescaso("")
    setTempoDeEstudo("")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
       criarTarefa()
    }
  };
  

  return (
    <HStack spacing={10}>

      <VStack align={"start"} width={"100%"} m={10}>
        
        <Text fontSize={17} >Titúlo</Text>
        <Input
          type="text"
          name="título"
          placeholder="Digite a sua tarefa"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />

        <Text fontSize={17}>Tempo de estudo</Text>
        <Input
          type="text"
          name="tempo de estudo"
          placeholder="ex. 29h"
          value={tempoDeEstudo}
          onChange={(event) => setTempoDeEstudo(event.target.value)}
        />

        <Text fontSize={17} >Tempo de descanso</Text>
        <Input
          type="text"
          name="title"
          placeholder={"ex. 10 mintos"}
          value={tempoDeDescaso}
          onChange={(event) => setTempoDeDescaso(event.target.value)}
          onKeyDown={handleKeyPress}
        />
      </VStack>

      <Spacer />

      <VStack width={"100%"} >

      <Text fontSize={25} fontWeight={"semibold"}>Minhas Tarefas</Text>

        <TableContainer>
          <Table variant="striped">
            <Thead>
              <Tr>
                <Th>Titulo</Th>
                <Th>Tempo</Th>
                <Th isNumeric>Descanso</Th>
              </Tr>
            </Thead>
            <Tbody>
              {tarefas.map(tarefa => (
                <Tr key={tarefa.id}>
                  <Td>{tarefa.titulo}</Td>
                  <Td>{tarefa.tempoDeEstudo}</Td>
                  <Td isNumeric>{tarefa.tempoDeDescaso} (minutos)</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </VStack>
      
    </HStack>
  );
}
