export default class View {
  constructor(elemento) {
    this._elemento = elemento;
  }

  template(model) {
    throw new Error("É preciso implementar o método template");
  }

  update(model) {
    this._elemento.innerHTML = this.template(model);
  }
}
