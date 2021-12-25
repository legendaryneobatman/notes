import { createStore } from 'vuex'
import { note } from './note'
import { application } from "./application";
import {LocalStorage} from "./plugins/localStorage";

export default createStore({
  modules: {
    note,
    application,
  },
  plugins: [LocalStorage]
})
