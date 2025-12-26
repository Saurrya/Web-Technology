const blocks = document.querySelectorAll(".block");
// mouse block ma chiryo
blocks.forEach(block => {
    block.addEventListener("mouseenter", () => {
        block.classList.add("hovered");
    });
    // mouse block bata niskyo
    block.addEventListener("mouseleave", () => {
        block.classList.remove("hovered");
    });
});
