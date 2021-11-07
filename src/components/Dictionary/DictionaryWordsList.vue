<template>
  <div class="wrods-list">
    <div class="row">
      <div
        class="col-12 col-md-12 col-lg-4 mt-3"
        v-for="item in wordsList"
        :key="item.id"
      >
        <dictionary-words-card
          :word="item.word"
          :translate="item.translate"
          :transcription="item.transcription"
          :card-id="item.id"
        />
      </div>
    </div>
    <b-alert variant="danger" class="mt-3">
      Ваш словарь пуст, добавьте новое слово в словарь
    </b-alert>
  </div>
</template>

<script>
import DictionaryWordsCard from "./DictionaryWordsCard.vue";
export default {
  components: { DictionaryWordsCard },
  name: "DictionaryWordsList",
  async created() {
    await this.$store.dispatch("fetchWordsList");
  },
  mounted() {
    this.wordsList.forEach(item => {
      console.log(item);
    });
  },
  computed: {
    wordsList() {
      return this.$store.getters.wordsList.words;
    },
  },
};
</script>