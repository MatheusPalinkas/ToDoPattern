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
      <li>
        <a class="add-grupo" href="./pages/addGrupo.html">
          <img src="./img/mais.png">
          Novo grupo
        </a>
      </li>
      `;
  }
}
