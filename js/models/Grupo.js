export default class Grupo {
  constructor(nome, color, key = null) {
    this._nome = nome;
    this._color = color;
    this._key = key;
  }

  get nome() {
    return this._nome;
  }

  get color() {
    return this._color;
  }

  get key() {
    return this._key;
  }

  equals(grupo) {
    return JSON.stringify(this) === JSON.stringify(grupo);
  }
}
