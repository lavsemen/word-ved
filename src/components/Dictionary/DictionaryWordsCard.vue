<template>
  <div
    class="word-card"
    @mouseout.stop="uncheckCardHandler"
    @mouseover.stop="checkCardHandler"
    @click="$router.push(`/card/${cardId}`)"
  >
    <div class="word-card__body">
      <div v-show="showWord" class="word-card__word">{{ word }}</div>
      <div v-show="!showWord" class="word-card__translate">
        {{ translate }}
      </div>
    </div>
    <div class="word-card__transcription">
      Транскрипция: <strong>{{ transcription }}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showWord: true,
    };
  },
  props: {
    word: String,
    translate: String,
    transcription: String,
    cardId: String,
  },
  methods: {
    checkCardHandler() {
      this.showWord = false;
    },
    uncheckCardHandler() {
      this.showWord = true;
    },
  },
};
</script>
<style scoped lang="scss">
.word-card {
  cursor: pointer;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  height: 100px;
  font-size: 27px;
  &__body {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    & + * {
      margin-top: 10px;
    }
  }
  &__transcription {
    color: rgb(96, 96, 96);
    font-size: 16px;
  }
}
</style>
