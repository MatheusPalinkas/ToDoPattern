import ListaTarefasPageFactory from "./components/ListaTarefasPage";
import AddTarefaPageFactory from "./components/AddTarefaPage";
import AddGrupoPageFactory from "./components/AddGrupoPage";
import FiltrosAside from "./components/FiltrosAside";

import "../css/styles.css";
import "../css/add.css";

class Router {
  constructor() {
    this._rootDiv = document.querySelector("#root");
    this._asideFiltro = document.querySelector(".aside-filtros");
    this._routes = {
      "/": ListaTarefasPageFactory.closureRender(""),
      "/hoje": ListaTarefasPageFactory.closureRender("Hoje"),
      "/completas": ListaTarefasPageFactory.closureRender("Completas"),
      "/criar/tarefa": AddTarefaPageFactory.render,
      "/criar/grupo": AddGrupoPageFactory.render,
    };

    window.closureRender = ListaTarefasPageFactory.closureRender;

    this._renderFiltros();
  }

  _renderFiltros() {
    FiltrosAside.render()
      .then((pageContent) => this._asideFiltro.appendChild(pageContent))
      .catch((erro) => {
        console.log(erro);
        this._asideFiltro.innerHTML = "";
      });
  }

  _returnPage(func) {
    func()
      .then((pageContent) => this._rootDiv.appendChild(pageContent))
      .catch((erro) => {
        console.log(erro);
        this._rootDiv.appendChild("");
      });
  }

  navigation(pathname) {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    this._rootDiv.innerHTML = "";
    this._returnPage(this._routes[window.location.pathname]);
  }

  undoNavigation() {
    this._rootDiv.innerHTML = "";
    this._returnPage(this._routes[window.location.pathname]);
  }
}

const router = new Router();

window.navigation = router.navigation.bind(router);

window.onpopstate = router.undoNavigation.bind(router);

export default navigation;
