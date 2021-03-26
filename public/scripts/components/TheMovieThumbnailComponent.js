export default {
    name: "TheMovieThumbnail",

    props: ["item"],

    template:
    `
    <div class="movie-thumb">
        <img :src='"images/" + item.movies_cover' alt="movie thumb">
    </div>
    
    `
}