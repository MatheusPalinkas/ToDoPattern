import DateHelper from "../helpers/DateHelper";

export default class ListaTarefasView {
  template(tarefas) {
    return (
      tarefas.map((tarefa) => this._createLiTarefa(tarefa)).join("") +
      this._linkAddTarefa()
    );
  }

  _createLiTarefa(tarefa) {
    const li = document.createElement("li");

    li.innerHTML = `
    <input 
      style="color: ${tarefa.color};"
      type="checkbox" 
      name="task" 
      id="task-${tarefa.key}" 
      value="${tarefa.nome}"
      ${tarefa.completa ? "checked" : ""}
      _idGrupo="${tarefa.idGrupo}"
      _dataFinal="${DateHelper.dataParaTexto(tarefa.dataFinal)}"
    >
    <label for="task-${tarefa.key}">${tarefa.nome}</label>`;
    return li.outerHTML;
  }

  _linkAddTarefa() {
    return `
      <li class="add-Tarefa">
        <a class="add-grupo" style="padding-left: 0" onclick="navigation('/criar-tarefa')">
          <img src="../img/mais.png">
          Adicionar nova tarefa
        </a>
      </li>
      `;
  }
}
