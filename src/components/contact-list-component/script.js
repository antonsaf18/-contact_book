export default {
    name: 'contact-list-component',
    props: [
        'arrForUser',
    ],
    data: function () {
        return {
            isClicked: true,
            arrayForUser: [
                {
                    user: 'иван иванов',
                    number: '89521780000',
                },
                {
                    user: '1иван 1иванов',
                    number: '89521780011',
                },
            ]
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