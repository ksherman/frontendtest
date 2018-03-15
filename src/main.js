import Vue from 'vue';
import App from './App.vue';
import store from './store';
import * as filters from './filters';

Vue.config.productionTip = false;
Vue.config.devtools = true;

// pull in filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
