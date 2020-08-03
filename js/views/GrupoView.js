class GrupoView extends View {
  template(grupos) {
    return (
      grupos
        .map(
          (grupo) => `
          <li>           
            ${grupo._nome}</label>
          </li>
      `
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
