// code from logrocket: https://blog.logrocket.com/creating-custom-select-dropdown-css/
document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.querySelector('select');
    const customSelect = document.querySelector('.custom-select');


    const overlay = document.getElementById("overlay");
    const colorPicker = document.getElementById("color");

    const filters = {
        none: "none",
        red: "sepia(1) hue-rotate(-20deg) saturate(6)",
        blue: "sepia(1) hue-rotate(170deg) saturate(6)",
        green: "sepia(1) hue-rotate(90deg) saturate(6)",
        purple: "sepia(1) hue-rotate(250deg) saturate(6)",
        black: "grayscale(1) brightness(0.3)",
    };

    // const updateSelectStyles = () => {
    //     customSelect.classList.toggle('select-valid', selectElement.value !== "");
    // };
    // selectElement.addEventListener('change', updateSelectStyles);
    colorPicker.addEventListener("change", (e) => {
    overlay.style.filter = filters[e.target.value];
    // updateSelectStyles();
});
});