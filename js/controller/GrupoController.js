import SelectGrupoView from "../views/SelectGrupoView";
import GrupoService from "../services/GrupoService";
import GrupoView from "../views/ListaGruposView";
import Grupo from "../models/Grupo";
class GrupoController {
  constructor() {
    this._grupoService = new GrupoService();
  }

  listar() {
    return this._grupoService.listar().then((listaGrupos) => listaGrupos);
  }

  adicionar(form) {
    const grupo = this._createGrupo(form);

    this._grupoService
      .adicionar(grupo)
      .then((res) => {
        alert(res);
        navigation("/");
      })
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
