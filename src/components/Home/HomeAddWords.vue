<template>
  <form class="add-words" @submit.prevent="addWordHandler">
    <div class="add-words__field">
      <label class="add-words__label" for="word">Слово</label>
      <b-form-input id="word" v-model="word" trim placeholder="Hello" />
      <b-alert
        :show="!isValid && !$v.word.required"
        variant="danger"
        class="add-words__alert"
      >
        Это обязательное поле!
      </b-alert>
    </div>
    <div class="add-words__field">
      <label class="add-words__label" for="translate">Перевод</label>
      <b-form-input
        id="translate"
        v-model="translate"
        trim
        placeholder="Привет"
      />
      <b-alert
        :show="!isValid && !$v.translate.required"
        variant="danger"
        class="add-words__alert"
      >
        Это обязательное поле!
      </b-alert>
    </div>
    <div class="add-words__field">
      <label class="add-words__label" for="transcription">Транскрипция</label>
      <b-form-input
        id="transcription"
        v-model="transcription"
        trim
        placeholder="Хелло"
      />
    </div>
    <div class="add-words__field">
      <label class="add-words__label" for="transcription"
        >Введите url картинки</label
      >
      <home-links-list :linksList="arrImageUrls" @removeLink="removeLink"/>
      <b-input
        trim
        placeholder="http://example.jpg"
        v-model="imageUrl"
        class="mt-1"
      ></b-input>
      <b-button @click="addImageUrl" variant="outline-primary" class="mt-3"
        >Добавить url</b-button
      >
    </div>
    <div class="add-words__field">
      <label class="add-words__label" for="transcription">Описание</label>
      <b-textarea
        v-model="description"
        size="sm"
        class="add-words__description"
        placeholder="Описание..."
      />
    </div>
    <div class="add-words__field">
      <b-button variant="primary" type="submit">Добавить слово</b-button>
    </div>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import HomeLinksList from './HomeLinksList.vue';

export default {
  components: { HomeLinksList },
  name: "HomeAddWords",
  data() {
    return {
      word: "",
      translate: "",
      transcription: "",
      description: "",
      imageUrl: "",
      arrImageUrls: [],
      isValid: true,
    };
  },
  validations: {
    word: {
      required,
    },
    translate: {
      required,
    },
  },
  methods: {
    removeLink(index) {
      this.arrImageUrls.splice(index, 1);
    },
    addWordHandler() {
      if (!this.$v.word.required || !this.$v.translate.required) {
        this.isValid = false;
        return;
      } else {
        this.isValid = true;
      }
      const formData = {
        word: this.word,
        translate: this.translate,
        transcription: this.transcription,
        description: this.description,
      };
      this.$store.dispatch("addWord", formData);
      this.word = "";
      this.transcription = "";
      this.translate = "";
      this.description = "";
    },
    addImageUrl() {
      this.arrImageUrls.push(this.imageUrl);
      this.imageUrl = "";
      console.log(this.arrImageUrls);
    },
  },
};
</script>

<style scoped lang="scss">
.add-words {
  &__field {
    & + * {
      margin-top: 16px;
    }
  }
  &__label {
    font-size: 18px;
    font-weight: 500;
  }
  &__alert {
    margin-top: 10px;
  }
}
</style>
