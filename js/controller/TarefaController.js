import TarefaService from "../services/TarefaService.js";
import TarefaView from "../views/TarefaView.js";
export default class TarefaController {
  constructor() {
    this._ulTarefas = document.querySelector(".ul-tarefas");

    this._tarefaService = new TarefaService();
    this._tarefaView = new TarefaView(this._ulTarefas);
    this.listar();
  }

  listar() {
    this._tarefaService
      .listar()
      .then((tarefas) => this._tarefaView.update(tarefas))
      .catch((erro) => alert(erro));
  }
}
