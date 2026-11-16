import { useContext } from "react";
import { TarefasContext } from "../context/TarefasContext";

function Tarefa({ tarefa }) {
  const { alternarTarefa } = useContext(TarefasContext);

  return (
    <li className={tarefa.concluida ? "concluida" : ""}>
      <input
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => alternarTarefa(tarefa.id)}
      />
      {tarefa.nome}
    </li>
  );
}

export default Tarefa;
