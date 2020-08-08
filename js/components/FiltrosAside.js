import getInstanceGrupo from "../controller/GrupoController";
import ListaGruposView from "../views/ListaGruposView";

export default class FiltrosAside {
  static _listarGrupos(listaGrupos) {
    return `
    <nav>
      <ul class="ul-filtros">
        <li>
          <img src="./img/todas.png"></img>
          Todas
        </li>
        <li>
          <img src="./img/hoje.png"></img>
          Hoje
        </li>
        <li>
          <img src="./img/completas.png"></img>
          Completos
        </li>
        <li class="li-grupos">
          <span class="span-grupos">
          <img src="./img/grupos.png"></img>
          Grupos
          </span>
          ${listaGrupos}
        </li>
      </ul>
    </nav>`;
  }

  static render() {
    return getInstanceGrupo()
      .listar()
      .then((grupos) => new ListaGruposView().template(grupos))
      .then((listaGrupos) => FiltrosAside._listarGrupos(listaGrupos))
      .catch((erro) => FiltrosAside._listarGrupos(""));
  }
}
