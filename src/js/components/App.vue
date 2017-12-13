<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
  import Navbar from './Navbar.vue';
  import Home from './Home.vue';
  export default {
    components: { Navbar, Home }
  }
</script>
