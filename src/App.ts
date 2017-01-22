declare var require: any;
var app_template = require('./App.html');
import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component({
    name: 'app',
    template: app_template
})
export default class App extends Vue {
    msg: string = 'Welcome to Your Vue.js App'
}