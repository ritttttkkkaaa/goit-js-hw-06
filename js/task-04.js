const buttons = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector("#value"),
};

let counterValue = 0;

const increment = () => {
    counterValue += 1;

    buttons.span.textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    buttons.span.textContent = counterValue;
}

buttons.sub.addEventListener("click", increment);
buttons.add.addEventListener("click", decrement);