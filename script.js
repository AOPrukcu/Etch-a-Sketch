const container = document.createElement("div");
container.classList.add("container")
window.addEventListener("load",addSquares(16))


body = document.querySelector("body");

body.appendChild(container);

const addBtn = document.createElement("button");
addBtn.textContent = "Sıfırla";
body.appendChild(addBtn);


addBtn.addEventListener("click", () => {
  let num = +window.prompt("lütfen kaç kare istiyorsanız girin");
  addSquares(num);
});

function addSquares(num) {
  for (let i = 0; i < num*16; i++) {
    const box = document.createElement("div")
    box.classList.add("box");
    const boxNum = (960 / num*num)
    // box.style.width = boxNum.toString() + "px";
    container.appendChild(box);
  }
}
