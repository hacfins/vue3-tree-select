import { inject } from 'vue';
import '../../tokens/index.mjs';
import { configProviderContextKey } from '../../tokens/config-provider.mjs';

const defaultConfig = {
  button: {
    autoInsertSpace: true
  }
};
const useGlobalConfig = () => {
  return inject(configProviderContextKey, defaultConfig);
};

export { useGlobalConfig };
//# sourceMappingURL=index.mjs.map
