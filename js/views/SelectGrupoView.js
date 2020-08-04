class SelectGrupoView extends View {
  template(grupos) {
    return grupos
      .map((grupo) => `<option value="${grupo.key}">${grupo.nome}</option>`)
      .join("");
  }
}
