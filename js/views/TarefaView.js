import View from "./View.js";

export default class TarefaView extends View {
  template(tarefas) {
    return (
      tarefas
        .map(
          (tarefa) => `
          <li>
            <input 
                type="checkbox" 
                name="task" 
                id="task-${tarefa._nome}" 
                value="${tarefa._nome}">
            <label for="task-${tarefa._nome}">${tarefa._nome}</label>
          </li>
        `
        )
        .join("") + this._linkAddTarefa()
    );
  }

  _linkAddTarefa() {
    return `
      <li class="add-Tarefa">
        <a class="add-grupo" href="./pages/addTarefa.html">
          <img src="./img/mais.png">
          Adicionar nova tarefa
        </a>
      </li>
      `;
  }
}
