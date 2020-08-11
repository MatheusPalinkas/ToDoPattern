export default class ListaGruposView {
  template(grupos) {
    const lis =
      grupos
        .map(
          (grupo) => `
          <li id="grupo-${grupo.key}" style="color: ${grupo._color};">           
            <span id="grupo-${grupo.key}">${grupo._nome}</span>
          </li>`
        )
        .join("") + this._linkAddGrupo();

    const ul = document.createElement("ul");
    ul.innerHTML = lis;
    ul.classList.add("ul-grupos");

    return ul.outerHTML;
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
