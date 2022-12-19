<template>
    <div class="G-Memoire">
        <div class="search-wrapper panel-heading col-sm-12">
            <input type="text" v-model="search" placeholder="Search here..." /> <br />
            <br />
        </div>
        <div class="container">
            <div class="posts-area row">
                <BlogPosts
                    class="col-md-3"
                    v-for="post in filteredPosts"
                    v-bind:key="post.id"
                    :name="post.name"
                    :image="post.image"
                    :link="post.link"
                    :description="post.description"
                ></BlogPosts>
                <div class="paginate">
                    <paginate
                        :page-count="getPageCount"
                        :key="search"
                        :click-handler="clickCallback"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                        :container-class="'pagination'"
                        :page-class="'page-item'"
                    >
                    </paginate>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BlogPosts from "../components/Blog/BlogPosts.vue";
import JsonPosts from "../json/Mémoire-post.json";
import Paginate from "vuejs-paginate-next";

export default {
    name: "G-Memoire",
    components: {
        BlogPosts,
        Paginate,
    },
    data: function () {
        return {
            posts: JsonPosts,
            perPage: 8,
            currentPage: 1,
            pages: [],
            search: "",
        };
    },

    methods: {
        clickCallback: function (pageNum) {
            this.currentPage = Number(pageNum);
        },

        //totalPaginas() {
        // return Math.ceil(this.posts.length / this.perPage);
        //},
        //getDataPagina(noPagina) {
        //  this.pages = [];
        //  let ini = noPagina * this.perPage - this.perPage;
        // let fin = noPagina - this.perPage;

        //for (let index = ini; index < fin; index++) {
        //this.pages.push(this.posts[index]);
        //} la mm que celle dessous
        // this.pages = this.posts.slice(ini, fin);

        // },
    },
    computed: {
        filteredPosts() {
            let current = this.currentPage * this.perPage;
            let start = current - this.perPage;
            if ( this.search.length > 0) {
                return this.posts.filter((p) => {
                    // return true if the card should be visible
                    // in this example we just check if the search string
                    // is a substring of the card description (case insensitive)
                    return (
                        p.description
                            .toLowerCase()
                            .indexOf(this.search.toLowerCase()) != -1
                    );
                });
            } else {
                return this.posts.slice(start, current);
            }
        },
        //getPosts: function () {
        //let current = this.currentPage * this.perPage;
        //let start = current - this.perPage;
        //return this.posts.slice(start, current);
        //},
        getPageCount: function () {
            return Math.ceil(this.posts.length / this.perPage);
        },
    },
};
</script>
<style>
.G-Memoire {
    text-align: center;
    margin-top: 6rem;
}

</style>
