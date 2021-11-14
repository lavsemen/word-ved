<template>
  <div class="card-info mt-5" v-if="cardInfo">
    <div class="card-info__field">
      <h2 class="card-info__title">{{ cardInfo.word }}</h2>
    </div>
    <div class="card-info__field">
      <h2>{{ cardInfo.translate }}</h2>
    </div>
    <div class="card-info__field">
      <p>{{ cardInfo.description }}</p>
    </div>
    <div class="card-info__field">
      <b-carousel
        id="carousel"
        controls
        indicators
        img-width="1024"
        img-height="700"
      >
        <b-carousel-slide
          v-for="url in cardInfo.imageUrls"
          :key="url + Math.random(10)"
          :img-src="url"
        ></b-carousel-slide>
      </b-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardInfo",
  props: {
    cardInfo: Object,
  },
  mounted() {},
};
</script>
<style scoped lang="scss">
.card-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
