import homePage from "../home-page/home-page";
import mainContentComponent from "../../components/main-content-component/main-content-component";

export default {
    name: 'home-page',
    props: {

    },
    components: {
        homePage,
        mainContentComponent,
    },
    data: function () {
        return {

        }
    },
    created() {
    },

    methods: {
        goTo(whereTo) {
            this.$router.push({name:whereTo})
            // this.$store.commit('setMessageForm', '');
            // window.scrollTo(0,0)
        }
    }
}