import PageFactory from "./PageFactory";

export default class AddTarefaPageFactory extends PageFactory {
  static render() {
    const divContent = document.createElement("div");
    divContent.innerHTML = `
	<h1 id="cabecalho">Adicionar tarefa</h1>

	<form class="form-tarefa">
		<div class="input-inline">
			<label for="nome-tarefa">Nome da tarefa</label>
			<input type="text" id="nome-tarefa">
		</div>
		<div class="input-inline">
			<label for="date-tarefa">Data de encerramento</label>
			<input type="date" id="date-tarefa">
		</div>
		<div class="input-inline">
			<label for="select-grupo">Selecione o grupo</label>
			<select id="select-grupo">
			</select>
		</div>
		<button type="submit">Adicionar</button>
	</form>
`;

    return divContent;
  }
}
