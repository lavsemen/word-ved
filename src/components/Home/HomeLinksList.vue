<template>
  <div class="links-list">
    <div
      class="links-list__link"
      v-for="(link, index) in shortLinkList"
      @click="$emit('removeLink', index)"
      :key="link + Math.random(10)"
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
  computed: {
    shortLinkList() {
      return this.linksList.map(link => {
        if (link.length > 30) {
          return link.slice(0, 30) + '...';
        } else {
          return link;
        }
      });
    }
  }
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