let counterValue = 0;

const incBtn = document.querySelector('[data-action="increment"]');
const decBtn = document.querySelector('[data-action="decrement"]');

const item = document.querySelector("#value")
const increment = () => {
    counterValue++
    item.textContent = counterValue;
};
const decrement = () => {
    counterValue--
    item.textContent = counterValue;
};

incBtn.addEventListener("click", increment);
decBtn.addEventListener("click", decrement);
