// code from logrocket: https://blog.logrocket.com/creating-custom-select-dropdown-css/
document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('select');
    const customSelect = document.querySelector('.custom-select');


    const overlay = document.getElementById("overlay");
    const colorPicker = document.getElementById("color");

    const filters = {
        none: "",
        red: "invert(10%) sepia(100%) saturate(3238%) hue-rotate(348deg) brightness(81%) contrast(96%)",
        blue: "sepia(1) hue-rotate(170deg) saturate(6)",
        green: "sepia(1) hue-rotate(90deg) saturate(6)",
        purple: "sepia(1) hue-rotate(250deg) saturate(6)",
        black: "grayscale(1) brightness(0.3)",
    };

    const imageUrl = {
        orange: "images/collar-orange-orange.png",
        red: "images/collar-orange-red.png",
        blue: "images/collar-orange-blue.png",
        green: "images/collar-orange-green.png",
        purple: "images/collar-orange-purple.png",
        black: "images/collar-orange-black.png",
    };

    overlay.style.filter = filters["none"];

    // const updateSelectStyles = () => {
    //     customSelect.classList.toggle('select-valid', selectElement.value !== "");
    // };
    // selectElement.addEventListener('change', updateSelectStyles);
    colorPicker.addEventListener("change", (e) => {
        // overlay.style.filter = filters[e.target.value];
        overlay.src = imageUrl[e.target.value];
        // updateSelectStyles();
    });
});