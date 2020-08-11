import getInstanceGrupo from "../controller/GrupoController";
import ListaGruposView from "../views/ListaGruposView";
import navigation from "../router";

export default class FiltrosAside {
  static _listarGrupos(listaGrupos) {
    return `
        <li value="">
          <img src="./img/todas.png"></img>
          Todas
        </li>
        <li value="Hoje">
          <img src="./img/hoje.png"></img>
          Hoje
        </li>
        <li value="Completos">
          <img src="./img/completas.png"></img>
          Completos
        </li>
        <li class="li-grupos">
          <span class="span-grupos">
          <img src="./img/grupos.png"></img>
          Grupos
          </span>
          ${listaGrupos}
        </li>`;
  }

  static _createUlMain(content) {
    const ul = document.createElement("ul");
    ul.classList.add("ul-filtros");
    ul.innerHTML = content;

    ul.addEventListener("click", (e) => {
      if (e.target.id.match(/grupo/) !== null) {
        const idGrupo = e.target.id.replace(/grupo-/, "");
        navigation(`/grupo/${idGrupo}`);
        return;
      }

      if (e.target.nodeName == "LI") {
        const filtro = e.target.getAttribute("value").toLowerCase();
        navigation(`/${filtro}`);
        return;
      }
    });
    return ul;
  }

  static render() {
    return getInstanceGrupo()
      .listar()
      .then((grupos) => new ListaGruposView().template(grupos))
      .then((listaGrupos) => FiltrosAside._listarGrupos(listaGrupos))
      .then((filtos) => FiltrosAside._createUlMain(filtos))
      .catch((erro) => FiltrosAside._listarGrupos(""));
  }
}
