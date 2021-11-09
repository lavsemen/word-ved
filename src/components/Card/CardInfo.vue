<template>
  <div class="card-info mt-5" v-if="cardInfo">
    <h2 class="card-info__title">{{ cardInfo.word }}</h2>
    <hr />
    <h2>{{ cardInfo.translate }}</h2>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  props: {
    cardInfo: Object,
  },
};
</script>
<style scoped lang="scss">
.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
