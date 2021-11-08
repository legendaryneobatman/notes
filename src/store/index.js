import { createStore } from 'vuex'
import { note } from './note'
import { application } from "./application";

export default createStore({
  modules: {
    note,
    application,
  }
})
