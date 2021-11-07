<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="light"
      variant="faded"
      class="border-bottom"
    >
      <b-navbar-brand href="#">WordVed</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            ><router-link exact class="nav__link" active-class="active" to="/"
              >Главная</router-link
            ></b-nav-item
          >
          <b-nav-item
            ><router-link
              exact
              class="nav__link"
              active-class="active"
              to="/dictionary"
              >Словарь</router-link
            ></b-nav-item
          >
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Найти</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "AppNavbar",
};
</script>

<style scoped lang="scss">
.nav {
  &__link {
    color: #000;
    &:hover {
      border: unset;
      text-decoration: none;
    }
  }
}
.active {
  border-bottom: 1px solid #000;
}
</style>