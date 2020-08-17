import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default {
    name: 'contact-form-component',
    props: {

    },
    data: function () {
        return {

        }
    },
    created() {
    },

    methods: {
        writeData(who, ev) {
            this.$emit('writeFormData', {
                who: who,
                value: ev.target.value
            });
        },

        addData() {
            this.$emit('addFormData')
        }
    },

    mounted() {
        Vue.axios.get('http://localhost:3000/posts/1').then((response) => {
            console.log(response.data)
        })
    }
}