<template>
    <div class="mdl-layout mdl-layout--fixed-header">
        <!-- Header -->
        <app-header></app-header>
        <!-- Main part -->
        <router-view />

    </div>
</template>

<script>
    import Header from "@/components/Header.vue"

    export default {
        components: {
            AppHeader: Header,
        }
    };
</script>


<style>
    * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        -o-box-sizing: border-box;
        box-sizing: border-box;

    }

    html,
    body {
        overflow: hidden;
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        background-color: #f7f7f7;
        height: 100%;
    }
</style>