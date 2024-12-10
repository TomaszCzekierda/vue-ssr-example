import TypesBase from '../../utils/type-base';

class ShellTypes extends TypesBase {
  constructor() {
    super('shell');
  }

  getters = {};

  mutations = {
    INITIALIZE: 'initialize',
  };

  actions = {
    INITIALIZE: 'initialize',
  };
}

class NamespacedShellTypes extends ShellTypes {
  constructor() {
    super();
    this.toNamespaced();
  }
}

const types = new NamespacedShellTypes();
const _types = new ShellTypes();

export { _types };
export default types;
