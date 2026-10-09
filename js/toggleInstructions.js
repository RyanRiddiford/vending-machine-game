


export function toggleInstructions() {
    let el = document.getElementById("instructions-display");
    if (el.classList.contains("hidden"))
        el.classList.remove("hidden");
    else
        el.classList.add("hidden");
}

