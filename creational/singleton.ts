namespace Singleton {
  class Singleton {
    private static _instance: Singleton;

    private constructor() {
      //...
    }

    public static get Instance() {
      // Do you need arguments? Make it a regular method instead.
      return this._instance || (this._instance = new this());
    }

    method() {}
  }

  const singletonInstance = Singleton.Instance;
  singletonInstance.method();
}