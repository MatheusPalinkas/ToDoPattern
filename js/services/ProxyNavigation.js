export default class ProxyNavigation {
  constructor() {
    throw new Error("A classe ProxyNavigation não deve ser instanciada");
  }

  static createProxy(objeto, props) {
    return new Proxy(objeto, {
      get(target, prop, receiver) {
        if (props.includes(prop) && ProxyNavigation._isFunction(target[prop])) {
          return function () {
            let func = Reflect.apply(target[prop], target, arguments);
            navigation("/");
            return func;
          };
        }

        return Reflect.get(target, prop, receiver);
      },
    });
  }

  static _isFunction(func) {
    return typeof func === typeof Function;
  }
}
