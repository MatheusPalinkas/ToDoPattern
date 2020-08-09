export default class DateHelper {
  constructor() {
    throw new Error("O DateHelper não deve ser instanciado.");
  }
  static dataParaTexto(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static textoParaData(texto) {
    if (!/\d{4}-\d{2}-\d{2}/.test(texto))
      throw new Error("Data deve estar no formato aaaa-mm-dd");

    return new Date(texto.split("-"));
  }

  static equals(date1, date2) {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getYear() === date2.getYear()
    );
  }
}
