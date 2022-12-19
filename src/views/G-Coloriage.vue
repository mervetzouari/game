<template>
    <div class="G-Coloriage">
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
import JsonPosts from "../json/Coloriage-post.json";
import Paginate from "vuejs-paginate-next";

export default {
    name: "G-Coloriage",
    components: {  BlogPosts,
        Paginate, },
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

       
    },
    computed: {
        filteredPosts() {
            let current = this.currentPage * this.perPage;
            let start = current - this.perPage;
            if (this.search.length > 0) {
                return this.posts.filter((p) => {
                    
                    return (
                        p.name
                            .toLowerCase()
                            .indexOf(this.search.toLowerCase()) != -1
                    );
                });
            } else {
                return this.posts.slice(start, current);
            }
        },
       
        getPageCount: function () {
            return Math.ceil(this.posts.length / this.perPage);
        },
    },
};
</script>
<style>
.G-Coloriage {
    text-align: center;
    margin-top: 6rem;
}

@media (min-width: 1024px) {
    .help {
        min-height: 100vh;
        display: flex;
        align-items: center;
    }
}
</style>
