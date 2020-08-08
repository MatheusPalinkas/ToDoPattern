export default class ListaGruposView {
  template(grupos) {
    return `<ul class="ul-grupos">${
      grupos
        .map(
          (grupo) => `
          <li style="color: ${grupo._color};">           
            <span>${grupo._nome}</span>
          </li>`
        )
        .join("") + this._linkAddGrupo()
    }</ul>`;
  }

  _linkAddGrupo() {
    return `
      <li class="li-add-grupo">
        <a class="add-grupo" onclick="navigation('/criar/grupo')">
          Novo grupo
        </a>
      </li>
      `;
  }
}
