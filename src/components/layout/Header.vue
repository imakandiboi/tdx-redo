<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="success">
      <b-navbar-brand href="#">
        <img
          alt="logo"
          src="@/assets/images/TRADEXPLORA_V4.1_mini.png"
          style="height: 60px"
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <h4 style="margin-left: 20px; color: rgba(255, 255, 255, 0.5)">Las las we better pass jiji</h4>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <b-nav-item href="#">Sign in</b-nav-item>
            <span style="padding: 8px 0" class="nav-link h">|</span>
            <b-nav-item href="#">Registration</b-nav-item>
            <b-nav-text style="padding: 0"
              ><b-button variant="warning" style="width: 120px; color: white"
                >SELL</b-button
              ></b-nav-text
            >
          </b-navbar-nav>
          <!-- <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form> -->

          <!-- <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
@media screen and (max-width: 768px) {
  .h {
    display: none;
  }
}
</style>