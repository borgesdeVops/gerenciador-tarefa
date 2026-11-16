import { useState, useContext } from "react";
import { TarefasProvider, TarefasContext } from "./context/TarefasContext";
import ListaDeTarefas from "./components/ListaDeTarefas";
import "./App.css";

function Conteudo() {
  const [texto, setTexto] = useState("");
  const { adicionarTarefa, setFiltro } = useContext(TarefasContext);

  function handleAdicionar() {
    if (texto.trim() === "") {
      return;
    }
    adicionarTarefa(texto);
    setTexto("");
  }

  return (
    <div className="container">
      <h1>Gerenciador de Tarefas</h1>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button onClick={handleAdicionar}>Adicionar</button>

      <div className="filtros">
        <button onClick={() => setFiltro("todas")}>Todas</button>
        <button onClick={() => setFiltro("concluidas")}>Concluídas</button>
        <button onClick={() => setFiltro("pendentes")}>Pendentes</button>
      </div>

      <ListaDeTarefas />
    </div>
  );
}

function App() {
  return (
    <TarefasProvider>
      <Conteudo />
    </TarefasProvider>
  );
}

export default App;
