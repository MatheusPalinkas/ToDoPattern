export default class ListaTarefasView {
  template(tarefas) {
    return (
      tarefas
        .map(
          (tarefa) => `
          <li>
            <input 
                style="color: ${tarefa.color};"
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
        <a class="add-grupo" style="padding-left: 0" onclick="navigation('/criar/tarefa')">
          <img src="./img/mais.png">
          Adicionar nova tarefa
        </a>
      </li>
      `;
  }
}
