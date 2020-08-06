import View from "./View.js";

export default class GrupoView extends View {
  template(grupos) {
    return (
      grupos
        .map(
          (grupo) => `
          <li style="color: ${grupo._color};">           
            <span>${grupo._nome}</span>
          </li>`
        )
        .join("") + this._linkAddGrupo()
    );
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
