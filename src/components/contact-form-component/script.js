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
        },

        writeData(who, ev) {
            this.$emit('writeFormData', {
                who: who,
                value: ev.target.value
            });
        },

        addData() {
            this.$emit('addFormData')
        }
    }
}