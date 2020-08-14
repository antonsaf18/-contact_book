export default {
    name: 'contact-list-component',
    props: {

    },
    data: function () {
        return {
            isClicked: true,
        }
    },
    created() {
    },

    methods: {
        inputting(event) {
            this.$emit('typing', event.target.value)
        },
        getClick() {
            this.isClicked = false;
        }
    }
}