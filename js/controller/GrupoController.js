import SelectGrupoView from "../views/SelectGrupoView";
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

  adicionar(form) {
    const grupo = this._createGrupo(form);
    console.log(grupo);
    this._grupoService
      .adicionar(grupo)
      .then((res) => alert(res))
      .catch((erro) => alert(erro));
  }

  selectGrupos() {
    return this._grupoService
      .listar()
      .then((grupos) => new SelectGrupoView().template(grupos));
  }

  _createGrupo(form) {
    return new Grupo(
      form.querySelector("#nome-grupo").value,
      form.querySelector("#cor-grupo").value
    );
  }
}

let grupoController = new GrupoController();

export default function getInstanceGrupo() {
  return grupoController;
}
