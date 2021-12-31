import { createStore } from "vuex";
import weather from './modules/weather';



// Create store
const store = createStore({
  modules: {
    weather
  },

});
export default store;