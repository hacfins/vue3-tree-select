import Row from './src/row.mjs';

const _Row = Row;
_Row.install = (app) => {
  app.component(_Row.name, _Row);
};
const ElRow = _Row;

export { ElRow, _Row as default };
//# sourceMappingURL=index.mjs.map
