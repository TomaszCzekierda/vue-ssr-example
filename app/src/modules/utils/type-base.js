export default class TypesBase {
  constructor(namespace) {
    this.namespace = namespace;
    this.base = {};
  }
  toNamespaced() {
    Object.keys(this).map((category, ci) => {
      if (category !== 'namespace') {
        Object.keys(this[category]).map((type, ti) => {
          if (!this.base[category]) {
            this.base[category] = {};
          }
          this['base'][category][type] = this[category][type];
          this[category][type] = `${this.namespace}/${this[category][type]}`;
        });
      }
    });
  }
}
