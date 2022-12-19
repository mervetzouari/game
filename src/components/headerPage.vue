<template>
    <header>
        <div class="header fixed-top">
            <div class="container">
                <div
                    class="d-flex flex-wrap align-items-center justify-content-center"
                >
                    <a href="/" class="me-lg-auto">
                        <span>
                            <RouterLink to="/">
                                <li class="logo">Best V-Games</li>
                            </RouterLink></span
                        >
                    </a>
                    <ul class="text-end" id="nav">
                        <RouterLink to="/G-Educatif"
                            ><li>G-Educatif</li></RouterLink
                        >
                        <RouterLink to="/G-Coloriage" 
                            ><li>G-Coloriage</li></RouterLink
                        >
                        <RouterLink to="/G-Memoire"
                            ><li>G-Mémoire</li></RouterLink
                        >
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: "HeaderPage",
};
</script>

<style lang="css" scoped>
.logo {
    list-style: none;
    color: rgb(239, 210, 251);
    font-size: 20px;
}
.header {
    background-color: rgb(15, 14, 14);
}
a {
    color: white;
}
#nav a.router-link-exact-active {
    color: rgb(195, 163, 247);
}
#nav {
    font-size: 18px;
}
</style>
