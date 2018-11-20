<template>
  <div class="mdl-layout mdl-layout--fixed-header">
    <!-- Header -->
    <app-header></app-header>
    <!-- Main part -->
    <router-view/>
  </div>
</template>

<script>
import Header from '@/views/Header.vue';

export default {
  components: {
    AppHeader: Header
  }
}
</script>


<style>

</style>
