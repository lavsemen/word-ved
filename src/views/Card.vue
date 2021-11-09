<template>
  <b-container>
    <card-info :card-info="cardInfo"/>
  </b-container>
</template>

<script>
import { DETAIL_WORD_URL } from "../utils/constant";
import axios from "axios";
import CardInfo from "../components/Card/CardInfo.vue";
export default {
  components: { CardInfo },
  name: "Card",
  data() {
    return {
      cardInfo: null,
    };
  },
  async created() {
    const res = await axios.get(
      DETAIL_WORD_URL + this.$route.params.id + ".json"
    );
    this.cardInfo = await res.data;
  },
};
</script>

<style>
</style>
