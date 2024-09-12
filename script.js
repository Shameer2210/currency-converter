let dropdowns = document.querySelectorAll("select");
let btn1 = document.getElementById("inputGroupSelect01");
let btn2 = document.getElementById("inputGroupSelect02");
let mainbtn = document.getElementById("converter");

let subject = document.getElementById("subject");

let results = document.getElementById("result");

const host = "api.frankfurter.app";
fetch(`https://${host}/latest`)
  .then((response) => response.json())
  .then((data) => displayvalues(data))
  .catch((error) => console.log(error));

function displayvalues(data) {
  let curr = Object.entries(data.rates);

  for (i = 0; i < curr.length; i++) {
    let lists = `<option value="${curr[i][0]}">${curr[i][0]}</option>`;
    dropdowns[0].innerHTML += lists;
    dropdowns[1].innerHTML += lists;
  }
}

mainbtn.addEventListener("click", () => {
  let fromm = btn1.value;
  let too = btn2.value;
  

  let inputval = subject.value;

  if (fromm === too) {
    alert("Same country not applicable");
  } else convert(fromm, too, inputval);
});

function convert(fromm, too, inputval) {
  const host = "api.frankfurter.app";
  fetch(`https://${host}/latest?amount=${inputval}&from=${fromm}&to=${too}`)
    .then((resp) => resp.json())
    .then((dat) => {
      results.value = `${Object.values(dat.rates)[0]}   ${Object.keys(dat.rates)} `;
     
    });
}




