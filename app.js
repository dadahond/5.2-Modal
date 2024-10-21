const list = document.querySelector("ol");
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
    list.innerHTML += `<li style="color: ${ranglar}">${ranglar}</li>`;
}