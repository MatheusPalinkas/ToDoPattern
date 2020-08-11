export default class Tarefa {
  constructor(
    idGrupo,
    dataFinal = new Date(),
    nome,
    key = null,
    color = "red",
    completa = false
  ) {
    this._dataFinal = new Date(dataFinal.getTime());
    this._nome = nome;
    this._idGrupo = idGrupo;
    this._key = key;
    this._color = color;
    this._completa = completa;
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

  get completa() {
    return this._completa;
  }

  set completa(value) {
    this._completa = value;
  }

  equals(tarefa) {
    return JSON.stringify(this) === JSON.stringify(tarefa);
  }
}
