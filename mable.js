// ------------------------------
// Basic JS Template
// ------------------------------

// Runs when the page has fully loaded
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page loaded and JS is running");
});

function doSomething() {
    const input = document.getElementById("inputField").value;
    console.log("Doing something...");
    let kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu", "Heinäkuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu","Joulukuu"];
    for(let i = 0; i < kuukaudet.length; i++) {
        let X = i + 1;
        kuukaudet[i] = kuukaudet[i].toLowerCase();
        console.log(kuukaudet[i]);
        if(input.toLowerCase() === kuukaudet[i] || parseFloat(input) === X) {
            if(i >= 0 && i < 12) {
                if (X === 12 || X <= 2) {
                    console.log("Talvi");
                } else if (X >= 3 && X <= 5) {
                    console.log("Kevät");
                } else if (X >= 6 && X <= 8) {
                    console.log("Kesä");
                } else if (X >= 9 && X <= 11) {
                    console.log("Syksy");
                }
                else{
                    console.log("Is this what you wanted? To mess with the code? >:D");
                }
            }
    }
}
}
