
import Vue from "vue";
import VueRouter from "vue-router";
import RouterPrefetch from "vue-router-prefetch";
import App from "./App";
// TIP: change to import router from "./router/starterRouter"; to start with a clean layout
import router from "./router/index";
import store  from './store'

import BlackDashboard from "./plugins/blackDashboard";
import i18n from "./i18n";
import "./registerServiceWorker";

//elementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, {locale});

Vue.use(BlackDashboard);
Vue.use(VueRouter);
Vue.use(RouterPrefetch);

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount("#app");

console.log(store);
