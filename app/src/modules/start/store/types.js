import TypesBase from '../../utils/type-base';

class StartTypes extends TypesBase {
  constructor() {
    super('start');
  }

  getters = {};

  mutations = {
    ADD: 'add',
  };

  actions = {
    ADD: 'add',
  };
}

class NamespacedStartTypes extends StartTypes {
  constructor() {
    super();
    this.toNamespaced();
  }
}

const types = new NamespacedStartTypes();
const _types = new StartTypes();

export { _types };
export default types;
