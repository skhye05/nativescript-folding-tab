export default {
    install: (Vue) => {
      Vue.registerElement('FoldingTab', () => require('../').FoldingTab);
    },
  };