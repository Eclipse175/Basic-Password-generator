const InputField = document.getElementById('input-field');
const randomSlider = document.getElementById('slider');
const copyPassword = document.querySelector('button');

function generatePassword(length) {
    let password = "";
    let possibleCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()[]";

    for (let i = 0; i < length; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }
    return password
}
// was having an issue where the slider value returned null and this link below helped understand the issue :
// https://codingbeautydev.com/blog/javascript-cannot-read-property-addeventlistener-of-null/

randomSlider.addEventListener("input", () => {
    InputField.value = generatePassword(16)
});
copyPassword.addEventListener('click', ()=> {
    InputField.select();
    // what happens here is that the text inside the inputField gets selected and copied with writeText()
    navigator.clipboard.writeText(InputField.value)
    alert('password has been copied :)')
})
InputField.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        InputField.value = "";
    }
})