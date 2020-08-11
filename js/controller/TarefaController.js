import ProxyNavigation from "../services/ProxyNavigation";
import ListaTarefasView from "../views/ListaTarefasView";
import TarefaService from "../services/TarefaService";
import DateHelper from "../helpers/DateHelper";
import Tarefa from "../models/Tarefa";

class TarefaController {
  constructor() {
    this._tarefaService = new TarefaService();
    this._listaTarefasView = new ListaTarefasView();
  }

  completarTarefa(id, tarefa) {
    this._tarefaService
      .completarTarefa(id, tarefa)
      .catch((erro) => alert(erro));
  }

  adicionar(form) {
    const tarefa = this._createTarefa(form);
    this._tarefaService
      .adicionar(tarefa)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }

  listar(filtro, params) {
    return this._tarefaService
      .listar(filtro, params)
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
      getElement("option:checked").getAttribute("color"),
      false
    );
  }
}

let tarefaController = new TarefaController();

export default function getInstanceTarefa() {
  return ProxyNavigation.createProxy(tarefaController, [
    "adicionar",
    "completarTarefa",
  ]);
}
