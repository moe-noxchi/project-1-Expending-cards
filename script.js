const panels = document.querySelectorAll(".panel")

panels.forEach(panel => {
    // this is a high order array method in an arrow function, u can remove the () around the panel
    panel.addEventListener("click", () => {
        // this is a click event with a click arrow function
        removeActiveClasses()
        panel.classList.add("active")
        // when we click we add a class thats active to panel
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove("active")
    })
}