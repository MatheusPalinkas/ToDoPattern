import Page from "./Page";
import getInstanceGrupo from "../controller/GrupoController";
import getInstanceTarefa from "../controller/TarefaController";
import AddGrupoPage from "./AddGrupoPage";

const grupoController = getInstanceGrupo();
const tarefaController = getInstanceTarefa();

export default class AddTarefaPage extends Page {
  static render(params) {
    return grupoController
      .selectGrupos()
      .then((selectGrupos) => AddTarefaPage._createFormTarefa(selectGrupos))
      .catch((erro) =>
        AddTarefaPage._createFormTarefa('<select id="select-grupo"></select>')
      );
  }

  static _createFormTarefa(selectGrupos) {
    const divContent = document.createElement("div");

    divContent.innerHTML = AddTarefaPage._contentDiv(selectGrupos);

    const form = divContent.querySelector(".form-tarefa");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      tarefaController.adicionar(form);
    });
    return divContent;
  }

  static _contentDiv(selectGrupos) {
    return `
      <h1 id="cabecalho">Adicionar tarefa</h1>

      <form class="form-tarefa">
        <div class="input-inline">
          <label for="nome-tarefa">Nome da tarefa</label>
          <input type="text" id="nome-tarefa">
        </div>
        <div class="input-inline">
          <label for="date-tarefa">Data de encerramento</label>
          <input type="date" id="date-tarefa">
        </div>
        <div class="input-inline">
          <label for="select-grupo">Selecione o grupo</label>
          ${selectGrupos}
        </div>
        <button type="submit">Adicionar</button>
      </form>`;
  }
}
