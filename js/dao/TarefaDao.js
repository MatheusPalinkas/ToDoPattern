class TarefaDao {
  constructor(connection) {
    this._connection = connection;
    this._store = "tarefas";
  }

  adiciona(tarefa) {
    return new Promise((resolve, reject) => {
      let request = this._getStore().add(tarefa);

      request.onsuccess = (e) => resolve("Tarefa adicionada com sucesso");
      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Erro ao adicionar tarefa");
      };
    });
  }

  listar() {
    return new Promise((resolve, reject) => {
      let cursor = this._getStore().openCursor();

      let tarefas = [];
      cursor.onsuccess = (e) => {
        let atual = e.target.result;
        if (atual) {
          let dado = atual.value;
          console.log(dado);
          atual.continue();
        } else {
          resolve(tarefas);
        }
      };
      cursor.onerror = (e) => {
        console.log(e.target.error);
        reject("Não foi possivel listar as tarefas");
      };
    });
  }

  apagar() {
    return new Promise((resolve, reject) => {
      let request = this._getStore().clear();
      request.onsuccess = (e) => resolve();
      request.onerror = (e) => {
        console.log(e.target.error);
        reject("Não foi possivel apagar as tarefas");
      };
    });
  }
  _getStore() {
    return this._connection
      .transaction([this._store], "readwrite")
      .objectStore(this._store);
  }
}
