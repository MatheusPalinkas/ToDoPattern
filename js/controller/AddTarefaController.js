class AddTarefaController {
  constructor() {
    this._formTarefa = document.querySelector(".form-tarefa");

    this._tarefaService = new TarefaService();
    this._init();
  }

  _init() {
    this._formTarefa.addEventListener("submit", (e) => {
      e.preventDefault();
      this.adicionar();
    });

    this._initSelectGrupo(document.querySelector("#select-grupo"));
  }

  adicionar() {
    const tarefa = this._createTarefa();
    this._tarefaService
      .adicionar(tarefa)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }

  _initSelectGrupo(elemento) {
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
