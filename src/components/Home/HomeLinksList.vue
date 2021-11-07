<template>
  <div class="links-list">
    <div
      class="links-list__link"
      v-for="(link, index) in linksList"
      @click="$emit('removeLink', index)"
      :key="link"
    >
      {{ link }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeLinksList",
  emits: ["removeLink"],
  props: {
    linksList: Array,
  },
};
</script>

<style scoped lang="scss">
.links-list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &__link {
    cursor: pointer;
    margin-left: 8px;
    &:hover {
      color: red;
      text-decoration: line-through;
    }
  }
}
</style>