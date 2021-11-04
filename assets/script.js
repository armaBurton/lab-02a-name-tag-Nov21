const nameInput = document.getElementById(`name-input`);
const nameButton = document.getElementById(`name-button`);
const userName = document.getElementById(`user-name`);
const bkgndColor = document.getElementsByClassName(`bkgnd-color`);
const colors = document.getElementById(`colors`);
const colorButton = document.getElementById(`color-button`);
const top = document.getElementById(`top`);
const bottom = document.getElementById(`bottom`);
const head = document.getElementById(`head`);
const foot = document.getElementById(`foot`);
const counter = document.getElementById(`name-count`);
const getCurrentFontId = document.getElementById(`user-name`);
const newFont = document.getElementById(`fonts`);
const fontButton = document.getElementById(`font-button`);

let nameCount = 0;
counter.textContent = nameCount;

colorButton.addEventListener('click', () => {
    const colorValue = colors.options[colors.selectedIndex].value;
    top.style.backgroundColor = colorValue;
    bottom.style.backgroundColor = colorValue;
    head.style.backgroundColor = colorValue;
    foot.style.backgroundColor = colorValue;
})

nameButton.addEventListener('click', () => {
    userName.textContent = nameInput.value;
    nameCount++;
    counter.textContent = nameCount;
})

fontButton.addEventListener('click', () =>{
    getCurrentFontId.style.fontFamily = newFont.value;
})