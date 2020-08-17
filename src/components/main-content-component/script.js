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

            ],
            newContact: {
                name: '',
                number: '',

            }
        }
    },
    created() {
    },

    methods: {
        inputting(event) {
            this.$emit('typing', event.target.value)
        },
        emitInputForm(ev) {
            this.newContact[ev.who] = ev.value;
        },
        emitButtonForm() {
            if (this.newContact.name && this.newContact.number) {
                this.arrayForContact.push(this.newContact);
                this.newContact = {
                    name: '',
                    number: '',

                }
            } else {
                console.log();
            }
        },

    }
}