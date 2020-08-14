import contactFormComponent from '../contact-form-component/contact-form-component'

export default {
    name: 'main-content-component',
    props: {

    },
    components: {
        contactFormComponent,
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