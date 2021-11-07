import axios from "axios";
import { BASE_WORDS_URL } from "@/utils/constant";

export default {
  state: {
    words: [],
  },
  mutations: {
    setWordsList(state, wordsList) {
      state.words = wordsList;
    },
    addWordHandler(state, word) {
      state.words.push(word);
    },
  },
  actions: {
    async fetchWordsList({ commit }) {
      try {
        const res = await axios.get(BASE_WORDS_URL);
        const wordsList = Object.entries(await res.data);
        const data = [];
        wordsList.forEach(word => {
          const [id, body] = word;
          data.push({
            id,
            ...body,
          });
        });
        commit("setWordsList", data);
      } catch (err) {
        commit("setWordsList", []);
      }

    },
    async addWord({ commit }, word) {
      const words = await axios.post(BASE_WORDS_URL, word);
      commit('addWordHandler', word);
      console.log(words);
    }
  },
  getters: {
    wordsList(state) {
      return state;
    },
  },
};
