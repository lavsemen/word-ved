<template>
  <div class="dictionary">
    <b-container>
      <dictionary-words-list />
    </b-container>
  </div>
</template>

<script>
import DictionaryWordsList from "../components/Dictionary/DictionaryWordsList.vue";
export default {
  components: { DictionaryWordsList },
  name: "Dictionary",
};
</script>
