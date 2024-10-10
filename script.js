const container = document.createElement("div");
container.classList.add("container");
window.addEventListener("load", addSquares(16));

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
    container.replaceChildren();
    for (let i = 0; i < num * num; i++) {
    
    const box = document.createElement("div");
    box.classList.add("box");
    box.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    const squarewidth = 960 / num;

    box.style.width = squarewidth.toString() + "px";
    box.style.height = squarewidth.toString() + "px";

    container.appendChild(box);
  }
}
