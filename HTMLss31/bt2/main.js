function darkMode() {
    const textElements = document.getElementsByClassName("text");
    for (let i = 0; i < textElements.length; i++) {
        const el = textElements[i];
        if (el.style.backgroundColor === "black") {
            el.style.backgroundColor = "white";
            el.style.color = "black";
        } else {
            el.style.backgroundColor = "black";
            el.style.color = "white";
        }
    }
}