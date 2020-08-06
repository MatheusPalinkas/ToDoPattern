import getInstanceTarefa from "./controller/TarefaController";
import getInstanceGrupo from "./controller/GrupoController";

import "../css/styles.css";
import "../css/add.css";

const routes = {
  "/": getInstanceTarefa().pageAddTarefa,
  "/criar/grupo": getInstanceGrupo().pageAddGrupo,
  "/criar/tarefa": getInstanceTarefa().pageAddTarefa,
};

const rootDiv = document.querySelector("#root");

const navigation = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = "";
  const iniciarRota = routes[window.location.pathname];

  rootDiv.appendChild(iniciarRota());
};

window.navigation = navigation;

window.onpopstate = () => {
  rootDiv.innerHTML = "";
  rootDiv.appendChild(routes[window.location.pathname]());
};

export default navigation;
