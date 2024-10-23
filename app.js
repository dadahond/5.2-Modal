const list = document.querySelector("ol");
const clearBtn = document.querySelector("#clear");
const number = prompt("nechta rang kk");

const colors = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
];

const randomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += colors[Math.trunc(Math.random() * colors.length)];
    }
    return color;
};
for (let i = 0; i < Number(number); i++) {
    const ranglar = randomColor();
    list.innerHTML += `<li style="color: ${ranglar}">${ranglar}<div>
    <button data-color=${ranglar}>Apply</button>
    <button>Delete</button>
    </div></li>`;
}
clearBtn.addEventListener("click", () => (list.textContent = ""));
document.addEventListener("click", (e) => {
    if (e.target.textContent == "Delete") {
        e.target.parentElement.parentElement.remove();
    } else if (e.target.textContent == "Apply") {
        const color = e.target.dataset.color;
        document.body.style.backgroundColor = color;
    }
});