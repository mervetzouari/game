<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
</script>

<template>
    <div class="home-page" >
        <TheWelcome />
    </div>
</template>
<script>
export default {
    name: "HomeView",
    components: { TheWelcome },
};
</script>
