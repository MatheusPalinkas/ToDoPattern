export default class Tarefa {
  constructor(idGrupo, dataFinal = new Date(), nome, key = null) {
    this._dataFinal = new Date(dataFinal.getTime());
    this._nome = nome;
    this._idGrupo = idGrupo;
    this._key = key;
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

  get key() {
    return this._key;
  }

  equals(tarefa) {
    return JSON.stringify(this) === JSON.stringify(tarefa);
  }
}
