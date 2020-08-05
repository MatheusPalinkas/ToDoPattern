import ConnectionFactory from "./ConnectionFactory.js";
import GrupoDao from "../dao/GrupoDao.js";
import Grupo from "../models/Grupo.js";

export default class GrupoService {
  constructor() {}

  listar() {
    return this._getGrupoDao()
      .then((dao) => dao.listar())
      .then((grupos) =>
        grupos.map((grupo) => new Grupo(grupo._nome, grupo._color, grupo._key))
      );
  }

  adicionar(grupo) {
    return this._getGrupoDao().then((dao) => dao.adiciona(grupo));
  }

  _getGrupoDao() {
    return ConnectionFactory.getConnection().then(
      (connection) => new GrupoDao(connection)
    );
  }
}
