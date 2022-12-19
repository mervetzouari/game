<script setup>
import { RouterView } from "vue-router";
import HeaderPage from "./components/headerPage.vue";

let msg1 = HeaderPage;
</script>

<template>
    <div>
        <msg1 />
        <RouterView />
    </div>
</template>
<style>
header {
    line-height: 1.5;
    display: block !important;
    padding-right: 0px !important;
}

#nav a.router-link-exact-active {
    color: var(--color-text);
}

#nav a.router-link-exact-active:hover {
    background-color: transparent;
}

#nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

#nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }
    #nav {
        padding: 0.5rem 0;
        margin-top: 0.5rem;
    }
}
</style>
