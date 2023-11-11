let select = document.getElementById("select");
let inputMontant = document.getElementById("input");
let inputValue = document.getElementById("value");
console.log(select.options[2]);
select.addEventListener("change", function () {
  if (select.options[1].value === "eu") {
    let test = inputMontant.value * 0.0015;
    inputValue.value = test;
  }
  if (select.options[2].value === "yn") {
    let test = inputMontant.value * 0.25;
    inputValue.value = test;
  }
  if (select.options[0].value === "dm") {
    let test = inputMontant.value * 0.016;
    inputValue.value = test;
  }
});
