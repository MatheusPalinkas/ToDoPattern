export default class Tarefa {
  constructor(
    idGrupo,
    dataFinal = new Date(),
    nome,
    key = null,
    color = "red"
  ) {
    this._dataFinal = new Date(dataFinal.getTime());
    this._nome = nome;
    this._idGrupo = idGrupo;
    this._key = key;
    this._color = color;
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

  get color() {
    return this._color;
  }

  equals(tarefa) {
    return JSON.stringify(this) === JSON.stringify(tarefa);
  }
}
