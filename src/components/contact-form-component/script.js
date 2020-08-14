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
        inputting(event) {
            this.$emit('typing', event.target.value)
        }
    }
}