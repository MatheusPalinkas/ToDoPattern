import ListaTarefasPageFactory from "./pages/ListaTarefasPageFactory";
import AddTarefaPageFactory from "./pages/AddTarefaPageFactory";
import AddGrupoPageFactory from "./pages/AddGrupoPageFactory";

import "../css/styles.css";
import "../css/add.css";

class Router {
  constructor() {
    this._rootDiv = document.querySelector("#root");
    this._routes = {
      "/": ListaTarefasPageFactory.render,
      "/criar/tarefa": AddTarefaPageFactory.render,
      "/criar/grupo": AddGrupoPageFactory.render,
    };
  }

  _returnPage(func) {
    func()
      .then(pageContent => this._rootDiv.appendChild(pageContent))
      .catch(erro => {
        console.log(erro);
        this._rootDiv.appendChild("");
      });
  }

  navigation(pathname) {
    window.history.pushState({}, pathname, window.location.origin + pathname);
    this._rootDiv.innerHTML = "";
    this._returnPage(this._routes[window.location.pathname])
  };

  undoNavigation() {
    this._rootDiv.innerHTML = "";
    this._returnPage(this._routes[window.location.pathname])
  };
}

const router = new Router();

window.navigation = router.navigation.bind(router);

window.onpopstate = router.undoNavigation.bind(router);

export default navigation;
