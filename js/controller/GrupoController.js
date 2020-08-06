import AddGrupoPageFactory from "../pages/AddGrupoPageFactory";
import GrupoService from "../services/GrupoService";
import GrupoView from "../views/GrupoView";
import Grupo from "../models/Grupo";
class GrupoController {
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

  adicionar() {
    const grupo = this._createGrupo();
    this._grupoService
      .adicionar(grupo)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }

  pageAddGrupo() {
    return AddGrupoPageFactory.render();
  }

  _createGrupo() {
    return new Grupo(
      this._form.querySelector("#nome-grupo").value,
      this._form.querySelector("#cor-grupo")
    );
  }
}

let grupoController = new GrupoController();

export default function getInstanceGrupo() {
  return grupoController;
}
