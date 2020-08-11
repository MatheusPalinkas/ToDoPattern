export default class Page {
  constructor() {
    throw new Error("Essa classe não deve ser instanciada");
  }

  static render(params) {
    throw new Error("O método render deve ser sobrecarregado");
  }
}
