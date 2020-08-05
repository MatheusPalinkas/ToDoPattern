export default class GrupoController {
  constructor() {
    this._ulGrupos = document.querySelector(".ul-grupos");

    this._grupoView = new GrupoView(this._ulGrupos);
    this._grupoService = new GrupoService();
    this._init();
  }

  _init() {
    this._grupoService
      .listar()
      .then((listaGrupos) => this._grupoView.update(listaGrupos));
  }

  adicionar(grupo) {
    this._grupoService
      .adicionar(grupo)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }
}
