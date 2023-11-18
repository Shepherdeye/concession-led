let day = document.getElementById("days"),
  gbyte = document.getElementById("gbytes"),
  Cases = document.getElementById("Cases"),
  check = document.getElementById("check"),
  row = document.getElementById("row"),
  less = document.getElementById("less"),

  more = document.getElementById("more"),
  moreThan = document.getElementById("moreThan"),

  lessThan = document.getElementById("lessThan"),
  lessThan2 = document.getElementById("lessThan2"),
  copyText = document.querySelector("#copy"),
  copyText2 = document.querySelector("#copy2"),


  result = document.getElementById("result"),
  duration = document.getElementById("duration"),

  btn = document.getElementById("btn");

btn.onclick = function () {
  result.value = day.value * gbyte.value * 1024 * 1024 * 1024;
  console.log(result);


  if (result.value <= 5368709120 &&result.value != 0 ) {
    result.style.color = "green";
    document.getElementById("notice").textContent = " OK add  it by your self";
    document.getElementById("notice").style.color = "green";
    document.getElementById("ir").classList.add("hidden1");

  } else if (result.value > 5368709120 && result.value <= 21474836480) {
    result.style.color = "red";
    console.log("morethan");
    document.getElementById("notice").textContent = "should  created  by  teamleader";
    document.getElementById("notice").style.color = "red";
    document.getElementById("ir").classList.remove("hidden1");
  } else if ( result.value > 21474836480) {
    document.getElementById("notice").textContent = " You will make a normal Concession ";
    document.getElementById("notice").style.color = "orange";
    document.getElementById("result").style.color = "orange";

    document.getElementById("ir").classList.add("hidden1");
  } else {
    document.getElementById("notice").textContent = " You should Enter a value ";
    document.getElementById("notice").style.color = "gray";
    document.getElementById("result").style.color = "gray";

    document.getElementById("ir").classList.add("hidden1");
  }




}
Cases.onchange = function () {
  // console.log("sayed")
  duration.classList.remove("hidden");
}
check.onclick = function () {
  // console.log("sayed")
  row.classList.remove("hidden");
}
less.onclick = function () {
  // console.log("sayed")
  lessThan.classList.remove("hidden1");
  lessThan2.classList.remove("hidden1");
  copyText.classList.remove("hidden1");


}
more.onclick = function () {
  // console.log("sayed")
  moreThan.classList.remove("hidden1");
  document.getElementById("copy2").classList.remove("hidden1");

}

copyText.onclick = function () {
  navigator.clipboard.writeText(lessThan2.innerText);
  document.getElementById("copy").style.background = "white";

}


copyText2.onclick = function () {
  navigator.clipboard.writeText(result.value);
  document.getElementById("copy2").style.background = "white";

}








