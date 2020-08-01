class Grupo {
  constructor(color, nome) {
    this._nome = nome;
    this._color = color;
  }

  get nome() {
    return this._nome;
  }

  get color() {
    return this._color;
  }

  equals(grupo) {
    return JSON.stringify(this) === JSON.stringify(grupo);
  }
}
