class Tarefa {
  constructor(idGrupo, dataFinal = new Date(), nome) {
    this._dataFinal = new Date(dataFinal.getTime());
    this._nome = nome;
    this._idGrupo = idGrupo;
  }

  get nome() {
    return this._nome;
  }

  get dataFinal() {
    return new Date(this._dataFinal.getTime());
  }

  get idGrupo() {
    return this._idGrupo;
  }

  equals(tarefa) {
    return JSON.stringify(this) === JSON.stringify(tarefa);
  }
}
