import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

//globally register
//Vue.component('BaseIcon', BaseIcon);

//gloablly register all components

//require.context -> feature o webpack
const requireComponent = require.context(
  './components', //dir
  false, //search subdir or not
  /Base[A-Z]\w+\.(vue|js)$/  //search for Files that being with Base and end with .vue or .js
)

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName)

  //convert to Pascal Case
  const componentName = upperFirst(
    camelCase(
      fileName.replace(/^\.\/(.*)\.\w+$/, '$1')
    )
  )

  //registering
  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  )
})

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
