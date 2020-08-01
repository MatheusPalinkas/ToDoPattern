class ListaGrupo {
  constructor() {
    this._grupos = [];
  }

  get listar() {
    return [...this._grupos];
  }

  ordenar(criterio) {
    this._grupos.sort(criterio);
  }

  limpar() {
    this._grupos = [];
  }

  adicionar(grupo) {
    this._grupos.push(grupo);
  }
}
