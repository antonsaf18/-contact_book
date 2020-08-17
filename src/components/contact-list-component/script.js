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

    },

    methods: {
        delClick(indexArrayItem) {
            this.$delete(this.arrForContact, indexArrayItem)
        }
    }
}