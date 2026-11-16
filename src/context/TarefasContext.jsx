import { createContext, useState } from "react";

export const TarefasContext = createContext();

export function TarefasProvider({ children }) {
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todas");

  function adicionarTarefa(nome) {
    const novaTarefa = {
      id: Date.now(),
      nome: nome,
      concluida: false,
    };
    // cria uma lista nova, sem mexer na original
    setTarefas([...tarefas, novaTarefa]);
  }

  function alternarTarefa(id) {
    const novaLista = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(novaLista);
  }

  return (
    <TarefasContext.Provider
      value={{ tarefas, filtro, setFiltro, adicionarTarefa, alternarTarefa }}
    >
      {children}
    </TarefasContext.Provider>
  );
}
