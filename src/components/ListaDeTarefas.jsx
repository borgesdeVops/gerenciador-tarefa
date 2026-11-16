import { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";
import Tarefa from "./Tarefa";

function ListaDeTarefas() {
  const { tarefas, filtro } = useContext(TarefasContext);

  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "concluidas") {
      return tarefa.concluida;
    }
    if (filtro === "pendentes") {
      return !tarefa.concluida;
    }
    return true;
  });

  return (
    <ul>
      {tarefasFiltradas.map((tarefa) => (
        <Tarefa key={tarefa.id} tarefa={tarefa} />
      ))}
    </ul>
  );
}

export default ListaDeTarefas;
