/*
 * @Author: 时不待我 790002517@qq.com
 * @Date: 2022-12-17 22:18:59
 * @LastEditors: 时不待我 790002517@qq.com
 * @LastEditTime: 2022-12-18 00:10:50
 */
import _Vue, { PluginObject } from 'vue';

// Import vue component
import component from './components/card.vue';

// Define typescript interfaces for installable component
type InstallableComponent = typeof component & PluginObject<any>;

// Default export is installable instance of component.
// IIFE injects install function into component, allowing component
// to be registered via Vue.use() as well as Vue.component(),
export default /*#__PURE__*/((): InstallableComponent => {
  // Assign InstallableComponent type
  const installable = component as unknown as InstallableComponent;

  // Attach install function executed by Vue.use()
  installable.install = (Vue: typeof _Vue) => {
    Vue.component('VuePokemonCardsCss', installable);
  };
  return installable;
})();

// It's possible to expose named exports when writing components that can
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = directive;
