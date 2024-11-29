import { TarefaDao } from "../datasource/TarefaDao";
import { Tarefa } from "../types/tarefa";


export class TarefaRepository {

    static shared = new TarefaRepository();

    async criarTarefa(tarefa: Tarefa): Promise<Tarefa> {
        try {
        
            if (tarefa.titulo === "") {
                throw new Error("O título da tarefa não pode ser vazio.");
            }
            
            if (tarefa.tempoDeEstudo === "" ) {
                throw new Error("O tempo de estudo deve ser um número válido.");
            }

            if (tarefa.tempoDeDescaso === "" || isNaN(Number(tarefa.tempoDeDescaso))) {
                throw new Error("O tempo de descaso deve ser um número válido.");
            }

            const novaTarefa = await TarefaDao.shared.criarTarefa(tarefa);
            return novaTarefa;

        } catch (error) {
            throw error;
        }
    }
}


