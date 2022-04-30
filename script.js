function selecionar() {
    const p1 = document.getElementById("p1")
    const p2 = document.getElementById("p2")
    const p3 = document.getElementById("p3")
    const p4 = document.getElementById("p4")

    p1.addEventListener("click", function () {
        p2.classList.remove("selected");
        p3.classList.remove("selected");
        p4.classList.remove("selected");
        p1.classList.add("selected");
    })
    p2.addEventListener("click", function () {
        p4.classList.remove("selected");
        p1.classList.remove("selected");
        p3.classList.remove("selected");
        p2.classList.add("selected");
    })
    p3.addEventListener("click", function () {
        p2.classList.remove("selected");
        p4.classList.remove("selected");
        p1.classList.remove("selected");
        p3.classList.add("selected");
    })
    p4.addEventListener("click", function () {
        p2.classList.remove("selected");
        p3.classList.remove("selected");
        p1.classList.remove("selected");
        p4.classList.add("selected");
    })
}

selecionar()








