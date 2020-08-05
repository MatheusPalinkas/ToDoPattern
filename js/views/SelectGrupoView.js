import View from "./View.js";

export default class SelectGrupoView extends View {
  template(grupos) {
    return grupos
      .map((grupo) => `<option value="${grupo.key}">${grupo.nome}</option>`)
      .join("");
  }
}
