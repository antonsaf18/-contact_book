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
            arrayForContact: [
                {
                    name: 'Николай Петров',
                    number: '8 952 178 78 11',
                    isClose: true,
                },
                {
                    name: 'Иван Иванов',
                    number: '8 999 178 00 00',
                    isClose: true,
                },
                {
                    name: 'Константин Константинов',
                    number: '8 999 178 22 22',
                    isClose: true,
                },
            ],

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