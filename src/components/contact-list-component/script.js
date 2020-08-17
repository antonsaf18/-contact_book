export default {
    name: 'contact-list-component',
    props: [
        'arrForContact',
    ],
    data: function () {
        return {
            isClicked: true,
        }
    },
    created() {
        console.log(this.arrForContact.index)
    },

    methods: {
        inputting(event) {
            this.$emit('typing', event.target.value)
        },
        delClick(indexArrayItem) {
            this.$delete(this.arrForContact, indexArrayItem)
        }
    }
}