class GrupoService {
  constructor() {}

  listar() {
    return this._getGrupoDao()
      .then((dao) => dao.listar())
      .then((grupos) =>
        grupos.map((grupo) => new Grupo(grupo._nome, grupo._color, grupo._key))
      );
  }

  _getGrupoDao() {
    return ConnectionFactory.getConnection().then(
      (connection) => new GrupoDao(connection)
    );
  }
}
