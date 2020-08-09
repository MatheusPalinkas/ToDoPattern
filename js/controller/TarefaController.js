import ListaTarefasView from "../views/ListaTarefasView";
import TarefaService from "../services/TarefaService";
import DateHelper from "../helpers/DateHelper";
import Tarefa from "../models/Tarefa";

class TarefaController {
  constructor() {
    this._ulTarefas = document.querySelector(".ul-tarefas");

    this._tarefaService = new TarefaService();
    this._listaTarefasView = new ListaTarefasView();

    this.listar();
  }

  adicionar(form) {
    const tarefa = this._createTarefa(form);
    this._tarefaService
      .adicionar(tarefa)
      .then((res) => {
        alert(res);
        navigation("/");
      })
      .catch((erro) => alert(erro));
  }

  listar(filtro) {
    return this._tarefaService
      .listar(filtro)
      .then((tarefas) => this._listaTarefasView.template(tarefas))
      .catch((erro) => {
        alert(erro);
        return "";
      });
  }

  _createTarefa(form) {
    const getElement = form.querySelector.bind(form);

    return new Tarefa(
      getElement("#select-grupo").value,
      DateHelper.textoParaData(getElement("#date-tarefa").value),
      getElement("#nome-tarefa").value,
      null,
      getElement("option:checked").getAttribute("color")
    );
  }
}

let tarefaController = new TarefaController();

export default function getInstanceTarefa() {
  return tarefaController;
}
