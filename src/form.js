import Vue from 'vue'
import VueForm from 'vue-form'

var options = {
    validators:{
        'valida-nombre' : function(value) {
            return value.length > 3 && value.length < 15
        },
        'no-espacios' : function(value) {
            return !value.includes(' ')
        }
    }
}



Vue.use(VueForm, options)