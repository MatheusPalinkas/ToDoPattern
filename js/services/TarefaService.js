import ConnectionFactory from "./ConnectionFactory.js";
import TarefaDao from "../dao/TarefaDao.js";
import Tarefa from "../models/Tarefa.js";

export default class TarefaService {
  constructor() {}

  listar() {
    return this._getTarefaoDao()
      .then((dao) => dao.listar())
      .then((tarefas) =>
        tarefas.map(
          (tarefa) =>
            new Tarefa(
              tarefa.idGrupo,
              tarefa.dataFinal,
              tarefa.nome,
              tarefa.key
            )
        )
      );
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
