const InputField = document.getElementById('input-field');
const randomSlider = document.getElementById('slider');

InputField.addEventListener('keypress', (e) =>{
    if (e.key === "Enter") {
        e.preventDefault();
        InputField.value = "";
    }
})