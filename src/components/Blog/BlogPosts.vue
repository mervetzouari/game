<template>
    <div class="row">
        <div class="Posts card col">
            <img v-bind:src="image" alt="image" class="post-image" />
            <div class="card-body">
                <h2 class="post-name">
                    <a v-bind:href="link" class="post-link" target="_blank">
                        {{ name }}
                    </a>
                </h2>
                <p class="post-description">{{description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
   
export default {
    name: "BlogPosts",
    props: ["name", "description", "image", "link"],
  
};
</script>
<style>

.Posts {
    background-color:#eee2ee;
    box-shadow: 1 0 10px rgb(240, 231, 240);
    text-align: left;
    position: relative;
    padding-right: 0px;
    padding-left: 0px;
    border-radius: 5%;
}

.post-image {
    
    width: 100%;
    margin-top: 0px;
    border-radius: 5%;
  
}
.card-body {
    width: 15rem;
}
.col {
    margin: 7px;
}

.post-link{
    color: #30043f;
}
.post-description{
    color: #530b6b;
    text-align: justify;
    font-size: 13px;
    padding:3px;

}
h2{
    font-size:20px ;
}
</style>
