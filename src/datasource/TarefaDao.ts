import { addDocument, setDocument } from "../firebase/firestore";
import { Tarefa } from "../types/tarefa";

export class TarefaDao {

    static shared = new TarefaDao()

    criarTarefa(tarefa: Tarefa): Promise<Tarefa> {
        return new Promise((resolve, reject) => {
            const docRef = addDocument('tarefas', tarefa)

            docRef
                .then((doc) => {
                    tarefa.id = doc.id;
                    setDocument('tarefas', tarefa.id, tarefa, true)
                        .then(() => resolve(tarefa))
                        .catch(() => reject())
                })
        })
    }

    
}