import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1';

const store = new Vuex.Store({
    state: {
        lessons: [],
        cart: [],
    },
    getters: {
        // lessonsInCart(state) {
        //     return state.cart.length;
        // },
        // priceInCart(state) {
        //     return state.cart.reduce((acc, lesson)=> {
        //         return acc + lesson.price;
        //     }, 0)
        // },
        // isLessonsInCart(state) {
        //     return (lesson) => { 
        //         return state.cart.findIndex(({id}) => {
        //             return id === lesson.id
        //         }) !== -1;
        //     }
        // },
        lessonsInCart: state => (
            state.cart.length
        ),
        priceInCart: state => (
            state.cart.reduce((acc, lesson) => (
                acc + lesson.price
            ), 0)
        ),
        isLessonInCart: state => lesson => (
            state.cart.findIndex(({id}) => (
                id === lesson.id
            )) !== -1
        ),
    },
    mutations: {
        setLessons(state, lessons) {
            state.lessons = lessons;
        },
        addToCart(state, lesson) {
            // state.cart = state.cart.concat(lesson);
            // state.cart = [...state.cart, lesson];
            state.cart.push(lesson);
        },
        deleteToCart(state, lesson) {
            let idx = state.cart.findIndex(x => {
                return x.id === lesson.id;
            }) 
            state.cart.splice(idx, 1)
        },
        clearCart(state) {
            state.cart = [];
        },
    },
    actions: {
        fetchLessons({ commit }) {
            fetch(LESSONS_URL)
                .then(rs => rs.json())
                .then(rs => {
                    // console.log(rs)
                    commit('setLessons', rs.courses);
                })
        },
        addToCart({ state, commit, getters }, lesson) {
            !getters.isLessonInCart(lesson)
            ? commit('addToCart', lesson)
            : commit('deleteToCart', lesson)
        },
    },
});

export default store;