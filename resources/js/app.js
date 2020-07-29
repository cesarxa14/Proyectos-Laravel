

require('./bootstrap');

window.Vue = require('vue');


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('cabecera', require('./components/Cabecera.vue').default);
Vue.component('seccion', require('./components/Seccion.vue').default);
Vue.component('portada', require('./components/Portada.vue').default);
Vue.component('panel-dash', require('./components/Panel-dash.vue').default);



const app = new Vue({
    el: '#app'
});
