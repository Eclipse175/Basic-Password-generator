const InputField = document.getElementById('input-field');
const randomSlider = document.getElementById('slider');
const copyPassword = document.querySelector('button');

var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function randomPassword() {
    let random = alphabets[Math.floor(Math.random()*alphabets.length)]
    joinedAlphabets += random
    console.log(random);
}
randomPassword();

InputField.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        InputField.value = "";
    }
})