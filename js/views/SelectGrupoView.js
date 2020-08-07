export default class SelectGrupoView {
  template(grupos) {
    return `
      <select id="select-grupo">
      ${grupos
        .map((grupo) => `<option value="${grupo.key}">${grupo.nome}</option>`)
        .join("")}
      </select>`;
  }
}
