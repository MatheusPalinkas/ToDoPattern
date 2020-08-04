class TarefaController {
  constructor() {
    this._ulTarefas = document.querySelector(".ul-tarefas");
    this._formTarefa = document.querySelector(".form-tarefa");

    this._tarefaService = new TarefaService();
    this._tarefaView = new TarefaView(this._ulTarefas);
    this._init();
  }

  _init() {
    this.listar();

    /*this._formTarefa.addEventListener("submit", (e) => {
      e.preventDefault();
      this.adicionar();
    });*/

    //this.initSelectGrupo(document.querySelector("#select-grupo"));
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

  initSelectGrupo(elemento) {
    const selectGrupoView = new SelectGrupoView(elemento);

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
