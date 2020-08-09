import ConnectionFactory from "./ConnectionFactory.js";
import DateHelper from "../helpers/DateHelper";
import TarefaDao from "../dao/TarefaDao.js";

export default class TarefaService {
  constructor() {}

  listar(termo) {
    return this._getTarefaoDao()
      .then((dao) => dao.listar())
      .then((tarefas) =>
        tarefas.filter((tarefa) => this._filtroTarefas(tarefa, termo))
      );
  }

  _filtroTarefas(tarefa, termo = "") {
    if (termo.toUpperCase() == "HOJE")
      return DateHelper.equals(tarefa.dataFinal, new Date());

    return true;
  }

  adicionar(tarefa) {
    return this._getTarefaoDao()
      .then((dao) => dao.adiciona(tarefa))
      .catch((erro) => {
        console.log(erro);
        return "Não foi possivel adicionar uma tarefa";
      });
  }

  _getTarefaoDao() {
    return ConnectionFactory.getConnection().then(
      (connection) => new TarefaDao(connection)
    );
  }
}
