import { createStore } from "vuex";
import coachesModule from "./modules/coaches";

const store = createStore({
  modules: {
    CoachesModule: coachesModule,
  },
  state() {
    return {
      userId: "c3",
    };
  },
  getters: {
    userId: (state) => {
      return state.userId;
    },
  },
});

export default store;
