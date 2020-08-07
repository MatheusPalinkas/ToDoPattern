import PageFactory from "./PageFactory";
import getInstanceTarefa from "../controller/TarefaController";

export default class ListaTarefasPageFactory extends PageFactory {
  static render() {
    return getInstanceTarefa()
      .listar()
      .then(
        (lisTarefas) =>
          `<ul class="ul-tarefas">${lisTarefas}</ul>`
      )
      .then(tarefas => ListaTarefasPageFactory._createTarefas(tarefas))
      .catch((erro) => ListaTarefasPageFactory._createTarefas(""));

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
