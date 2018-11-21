<template>
    <main class="mdl-layout__content">
        <div class="form-group">
            <input type="text" id="dynamic-label-input" placeholder="Enter some text">
            <label for="dynamic-label-input">Enter some text</label>
        </div>
    </main>
</template>

<script>
    export default {
        name: "signIn"
    };
</script>


<style scoped>
    .form-group {
        position: relative;
        padding-top: 1.5rem;
    }

    label {
        position: absolute;
        top: 0;
        font-size: var(--font-size-small);
        opacity: 1;
        transform: translateY(0);
        transition: all 0.2s ease-out;
    }

    input:placeholder-shown+label {
        opacity: 0;
        transform: translateY(1rem);
    }
</style>