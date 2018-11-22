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

    .mdl-layout-content {
        display: block;
        margin: 1.5em auto;
        height: 100%;
    }

    .form {
        background-color: #fff;
        min-width: 20em;
        width: 80%;
        max-width: 30em;
        margin-left: auto;
        margin-right: auto;
        margin-top: 2em;
        margin-bottom: 4em;
        padding: 1.5em;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    }

    h3 {
        margin-top: 0.3em;
        margin-bottom: 0.3em;
        text-align: center;
    }

    .deviding-line {
        width: 100%;
        height: 1px;
        background-color: #757575;
    }

    .form-group {
        margin-bottom: 1.5em;
    }

    .form-group .title {
        display: block;
        margin-bottom: 0.5em;
        font-size: 0.9em;
        font-weight: 600;
    }

    .text-input {
        outline: none;
        width: 100%;
        line-height: 2.5em;
        padding-left: 0.7em;
        padding-right: 0.7em;
        font-size: 1.1em;
        border: 1px solid #9a9a9a;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    .text-input.invalid {
        border-color: #d50000 !important;
    }

    .message {
        display: inline-block;
        margin-top: 0.5em;
        font-size: 0.9em;
        -webkit-transition: all 0.3s ease;
        -moz-transition: all 0.3s ease;
        -o-transition: all 0.3s ease;
        transition: all 0.3s ease;
    }

    .error-message {
        color: #d50000 !important;
    }

    /* Submit Button */
    .submit-button {
        margin-left: auto;
        margin-right: auto;
        display: block;
        width: 100%;
        min-width: 15em;
        line-height: 3em;
        font-size: 1.1em;
        background-color: #fff;
        border: 1px solid #2196f3;
        color: #2196f3;
        -webkit-transition: all 0.2s ease;
        -moz-transition: all 0.2s ease;
        -o-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }

    .submit-button:hover {
        cursor: pointer;
        background-color: #2196f3;
        color: #fff;
    }

    .submit-button:disabled {
        cursor: default;
        background-color: #757575;
        border-color: #757575;
        color: #fff;
    }

    .submit-button.submitted {
        background-color: #4caf50 !important;
        border-color: #4caf50 !important;
    }

    .submit-button.error {
        background-color: #f44336 !important;
        border-color: #f44336 !important;
    }
</style>