export default class PageFactory {
  constructor() {
    throw new Error("Essa classe não deve ser instanciada");
  }

  static render() {
    throw new Error("O método render deve ser sobrecarregado");
  }
}
