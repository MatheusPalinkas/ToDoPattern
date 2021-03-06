import Grupo from "../models/Grupo.js";

export default class GrupoDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "grupos";
  }

  adiciona(grupo) {
    return new Promise((resolve, reject) => {
      let request = this._getStore().add(grupo);

      request.onsuccess = (e) => resolve("Grupo adicionada com sucesso");
      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Erro ao adicionar grupo");
      };
    });
  }

  listar() {
    return new Promise((resolve, reject) => {
      let cursor = this._getStore().openCursor();

      let grupos = [];
      cursor.onsuccess = (e) => {
        let atual = e.target.result;
        if (atual) {
          let dado = atual.value;
          let key = atual.key;
          grupos.push(new Grupo(dado._nome, dado._color, key));
          atual.continue();
        } else {
          resolve(grupos);
        }
      };
      cursor.onerror = (e) => {
        console.log(e.target.error);
        reject("Não foi possivel listar os grupos");
      };
    });
  }

  apagar() {
    return new Promise((resolve, reject) => {
      let request = this._getStore().clear();
      request.onsuccess = (e) => resolve();
      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Não foi possivel apagar as as tarefas");
      };
    });
  }

  _getStore() {
    return this._connection
      .transaction([this._store], "readwrite")
      .objectStore(this._store);
  }
}
