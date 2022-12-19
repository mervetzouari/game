const filters = {
    uppercase(v) {
        return v.toUpperCase();
    },
    shorten(v, textLength, suffix) {
        //return v.substring(0, 15) + "...";//reduire text ecrire en tplate $filters.shorten(content)
        return v.substring(0, textLength) + suffix; // reduire le text selon ce que je veux je met en tmplate suffix se sont les ... ou bien more selon ce que je veux
    },
};
export default filters;
