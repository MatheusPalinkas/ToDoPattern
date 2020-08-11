import ConnectionFactory from "./ConnectionFactory.js";
import DateHelper from "../helpers/DateHelper";
import TarefaDao from "../dao/TarefaDao.js";

export default class TarefaService {
  constructor() {}

  listar(termo, param) {
    return this._getTarefaoDao()
      .then((dao) => dao.listar())
      .then((tarefas) =>
        tarefas.filter((tarefa) => this._filtroTarefas(tarefa, termo, param))
      );
  }

  _filtroTarefas(tarefa, termo = "", param = null) {
    if (termo.toUpperCase() == "HOJE")
      return DateHelper.equals(tarefa.dataFinal, new Date());

    if (termo.toUpperCase() == "COMPLETOS") return tarefa.completa == true;

    if (termo.toUpperCase() == "GRUPOS") return tarefa.idGrupo == param;

    return true;
  }

  completarTarefa(idTarefa, tarefa) {
    return this._getTarefaoDao()
      .then((dao) => dao.atualiza(idTarefa, tarefa))
      .catch((erro) => {
        console.log(erro);
        return "Não foi possivel adicionar uma tarefa";
      });
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
