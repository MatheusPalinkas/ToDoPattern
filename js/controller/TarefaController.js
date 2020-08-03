class TarefaController {
  constructor() {
    this._ulTarefas = document.querySelector(".ul-tarefas");

    this._tarefaView = new TarefaView(this._ulTarefas);
    this._init();
  }

  _init() {
    ConnectionFactory.getConnection()
      .then((connection) => new TarefaDao(connection))
      .then((dao) => dao.listar())
      .then((tarefas) =>
        tarefas.map(
          (tarefa) => new Tarefa(tarefa._nome, tarefa._color, tarefa._key)
        )
      )
      .then((listaTarefas) => this._tarefaView.update(listaTarefas));
  }
}
