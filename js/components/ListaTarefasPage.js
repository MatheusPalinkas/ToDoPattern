import Page from "./Page";
import getInstanceTarefa from "../controller/TarefaController";

export default class ListaTarefasPage extends Page {
  static closureRender(filtro) {
    return () => {
      return getInstanceTarefa()
        .listar(filtro)
        .then((lisTarefas) => `<ul class="ul-tarefas">${lisTarefas}</ul>`)
        .then((tarefas) => ListaTarefasPage._createTarefas(tarefas))
        .catch((erro) => ListaTarefasPage._createTarefas(""));
    };
  }

  static _createTarefas(tarefas) {
    const divContent = document.createElement("div");
    divContent.innerHTML = `
      <h1 id="cabecalho">Hoje</h1>
      ${tarefas}
    `;

    return divContent;
  }
}
