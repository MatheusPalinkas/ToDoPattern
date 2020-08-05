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
        <a class="add-grupo" href="./pages/addGrupo.html">
          Novo grupo
        </a>
      </li>
      `;
  }
}
