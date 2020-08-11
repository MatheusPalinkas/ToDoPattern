import Page from "./Page";
import getInstanceGrupo from "../controller/GrupoController";

export default class AddGrupoPage extends Page {
  static render(params) {
    return new Promise((resolve, reject) => {
      const divContent = document.createElement("div");
      divContent.innerHTML = `
				<h1 id="cabecalho">Criar grupo</h1>

				<form class="form-grupo">
					<div class="input-inline">
						<label for="nome-grupo">Nome do grupo</label>
						<input type="text" id="nome-grupo" required/>
					</div>
					<div class="input-inline">
						<label for="cor-grupo">Escolha uma cor</label>
						<input type="color" id="cor-grupo" required value="#2A7AE4"/>
					</div>
					<button type="submit">Adicionar</button>
				</form>`;

      const form = divContent.querySelector(".form-grupo");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        getInstanceGrupo().adicionar(form);
      });
      resolve(divContent);
    });
  }
}
