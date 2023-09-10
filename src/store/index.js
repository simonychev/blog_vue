import {createStore} from "vuex";
import {PostModule} from "@/store/postModule";
export default createStore({
    // state: {
    //     likes: 0,
    //     isAuth: false,
    // },
    // getters : {
    //     doubleLikes(state) {
    //         return state.likes * 2
    //     }
    // },
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes += 1;
    //     },
    //     decrementLikes(state) {
    //         state.likes -= 1;
    //     },
    // },
    // actions: {
    //
    // },
    modules: {
        post: PostModule
    }
 })