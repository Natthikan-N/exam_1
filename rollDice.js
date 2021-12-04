//element
const inputArr = document.getElementById("givenArr");
const inputTarget = document.getElementById("target");
const form = document.querySelector(".form");
const outPut = document.getElementById("outPut");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputArr = document.getElementById("givenArr").value;
    const inputTarget = document.getElementById("target").value;

    const givenArr = inputArr.split(",").map((el) => +el);
    const target = +inputTarget;
    outPut.innerHTML = searchIndex(givenArr, target);
  });
}

const searchIndex = (givenArr, target) => {
  const copyArr = givenArr;
  for (let i = 0; i < givenArr.length; i++) {
    for (let j = 1; j < copyArr.length; j++) {
      if (givenArr[i] + copyArr[j] === target) {
        if (i < j) return `[ ${i} , ${j} ]`;
      }
    }
  }
};
