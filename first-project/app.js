let btnOne = document.getElementById("btn-one");

btnOne.addEventListener("click", () => {
    let finSub = document.getElementsByClassName("fin-sub")[0];
    if (!finSub.classList.contains("active")) {
        finSub.classList.add("active");
    } else {
        finSub.classList.remove("active");
    }
});
