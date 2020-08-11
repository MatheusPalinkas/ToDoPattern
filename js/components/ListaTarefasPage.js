import Page from "./Page";
import Tarefa from "../models/Tarefa";
import getInstanceTarefa from "../controller/TarefaController";

export default class ListaTarefasPage extends Page {
  static closureRender(filtro) {
    return () => {
      return getInstanceTarefa()
        .listar(filtro)
        .then((lisTarefas) => ListaTarefasPage._createUlTarefa(lisTarefas))
        .then((tarefas) => ListaTarefasPage._createTarefas(tarefas))
        .catch((erro) => ListaTarefasPage._createTarefas(""));
    };
  }

  static _createUlTarefa(content) {
    const ul = document.createElement("ul");
    ul.classList.add("ul-tarefas");
    ul.innerHTML = content;
    ul.addEventListener("click", (e) => {
      if (e.target.nodeName === "INPUT") {
        const tarefa = ListaTarefasPage._createTarefaByTarget(e.target);

        getInstanceTarefa().completarTarefa(Number(tarefa.key), tarefa);
      }
    });
    return ul;
  }

  static _createTarefaByTarget(target) {
    const id = target.id.replace(/task-/, "");
    const dateArray = target.getAttribute("_datafinal").split("/");
    const date = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);

    return new Tarefa(
      target.getAttribute("_idgrupo"),
      date,
      target.value,
      id,
      target.style.color,
      target.checked
    );
  }

  static _createTarefas(tarefas) {
    const divContent = document.createElement("div");
    divContent.innerHTML = `
      <h1 id="cabecalho">Hoje</h1>
    `;
    divContent.appendChild(tarefas);

    return divContent;
  }
}
