import AddTarefaPageFactory from "../pages/AddTarefaPageFactory";
import TarefaService from "../services/TarefaService";
import TarefaView from "../views/TarefaView";

class TarefaController {
  constructor() {
    this._ulTarefas = document.querySelector(".ul-tarefas");

    this._tarefaService = new TarefaService();
    this._tarefaView = new TarefaView(this._ulTarefas);

    this.listar();
  }

  adicionar() {
    const tarefa = this._createTarefa();
    this._tarefaService
      .adicionar(tarefa)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }

  listar() {
    this._tarefaService
      .listar()
      .then((tarefas) => this._tarefaView.update(tarefas))
      .catch((erro) => alert(erro));
  }

  pageAddTarefa() {
    return AddTarefaPageFactory.render((select) => {
      this._initSelectGrupo(select).bind(this);
    });
  }

  _initSelectGrupo(elemento) {
    const selectGrupoView = new SelectGrupoView(elemento);
    console.log(selectGrupoView);
    new GrupoService()
      .listar()
      .then((listaGrupos) => selectGrupoView.update(listaGrupos));
  }

  _createTarefa() {
    const getElement = this._formTarefa.querySelector.bind(this._formTarefa);

    return new Tarefa(
      getElement("#select-grupo").value,
      DateHelper.textoParaData(getElement("#date-tarefa").value),
      getElement("#nome-tarefa").value
    );
  }
}

let tarefaController = new TarefaController();

export default function getInstanceTarefa() {
  return tarefaController;
}
