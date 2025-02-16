function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.querySelectorAll("#Trophés li").forEach(li => {
    li.addEventListener("click", function() {
        this.style.backgroundColor = getRandomColor();
    });
});
