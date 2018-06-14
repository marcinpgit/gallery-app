<template>

<b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="/#/">Welcome</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="/#/bio">Bio</b-nav-item>
    </b-navbar-nav>

    <b-navbar-nav class="">

      <b-nav-item-dropdown text="Galleries">
        <b-dropdown-item href="/#/travel">Travel</b-dropdown-item>
        <b-dropdown-item href="/#/cars">Cars</b-dropdown-item>
        <b-dropdown-item href="/#/people">People</b-dropdown-item>
      </b-nav-item-dropdown>

    </b-navbar-nav>

  </b-collapse>
</b-navbar>  

</template>

<script>
export default {
    name: 'headerPage',
}
</script>

<style scoped>
    .navbar-expand-md .navbar-nav .nav-link { 
        color: #fff;
        padding-left: 40px;
        padding-right: 40px
    }
    .bg-info {
        background-color: #2C3E50 !important
    }
</style>