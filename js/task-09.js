function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const textColor = document.querySelector('.color');
const randomColorBtn = document.querySelector('.change-color');
const body = document.body;

const randomColor = () => {
  textColor.textContent = body.style.backgroundColor = getRandomHexColor();
};

randomColorBtn.addEventListener('click', randomColor);