class ListaTarefa {
  constructor() {
    this._tarefas = [];
  }

  get listar() {
    return [...this._tarefas];
  }

  ordenar(criterio) {
    this._tarefas.sort(criterio);
  }

  limpar() {
    this._tarefas = [];
  }

  adicionar(grupo) {
    this._tarefas.push(grupo);
  }
}
