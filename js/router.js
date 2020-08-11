import ListaTarefasPageFactory from "./pages/ListaTarefasPage";
import AddTarefaPageFactory from "./pages/AddTarefaPage";
import AddGrupoPageFactory from "./pages/AddGrupoPage";
import FiltrosAside from "./pages/FiltrosAside";

import "../css/styles.css";
import "../css/add.css";

class Router {
  constructor() {
    this._rootDiv = document.querySelector("#root");
    this._asideFiltro = document.querySelector(".aside-filtros");
    this._routes = {
      "/": ListaTarefasPageFactory.closureRender(""),
      "/hoje": ListaTarefasPageFactory.closureRender("Hoje"),
      "/completos": ListaTarefasPageFactory.closureRender("Completos"),
      "/grupo": ListaTarefasPageFactory.closureRender("Grupos"),
      "/criar-tarefa": AddTarefaPageFactory.render,
      "/criar-grupo": AddGrupoPageFactory.render,
    };

    this._renderFiltros();
  }

  _renderFiltros() {
    FiltrosAside.render()
      .then((pageContent) => {
        this._asideFiltro.innerHTML = "";
        this._asideFiltro.appendChild(pageContent);
      })
      .catch((erro) => {
        console.log(erro);
        this._asideFiltro.innerHTML = "";
      });
  }

  _returnPage(func, params) {
    func(params)
      .then((pageContent) => this._rootDiv.appendChild(pageContent))
      .catch((erro) => {
        console.log(erro);
        this._rootDiv.appendChild("");
      });
  }

  navigation(pathname) {
    const resource = `/${pathname.split("/")[1]}`;
    const param = pathname.split("/")[2];

    window.history.pushState({}, resource, window.location.origin + pathname);
    this._rootDiv.innerHTML = "";
    this._returnPage(this._routes[resource], param);
    this._renderFiltros();
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
