import contactFormComponent from '../contact-form-component/contact-form-component'
import contactListComponent from '../contact-list-component/contact-list-component'

export default {
    name: 'main-content-component',
    props: {

    },
    components: {
        contactFormComponent,
        contactListComponent,
    },
    data: function () {
        return {

        }
    },
    created() {
    },

    methods: {
        inputting(event) {
            this.$emit('typing', event.target.value)
        }
    }
}