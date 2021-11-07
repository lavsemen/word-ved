<template>
  <div class="home">
    <b-container>
      <HomeAddWords class="mt-5" />
    </b-container>
  </div>
</template>

<script>
import HomeAddWords from "@/components/Home/HomeAddWords";
export default {
  name: "Home",
  components: { HomeAddWords },
};
</script>
