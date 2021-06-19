var num;

function dynamicresult() {
  var maindiv = document.getElementById("dynamic");
  //dynamic div
  var first = document.createElement("div");
  first.id = "firstdiv";
  var firstparagraph = document.createElement("h1");
  firstparagraph.innerHTML = "Result !!!!";
  first.appendChild(firstparagraph);
  var second = document.createElement("div");

  second.id = "seconddiv";

  maindiv.appendChild(first);
  maindiv.appendChild(second);

  var oboe = document.getElementById("selectid").value;
  //right tree condition
  if (oboe === "right") {
    var no = document.getElementById("novalue").value;
    var seconddiv = document.getElementById("seconddiv");
    let item;

    for (var rows = 1; rows <= no; rows++) {
      var lists = document.createElement("p");
      for (var columns = 1; columns <= rows; columns++) {
        lists.innerHTML += columns;
      }

      seconddiv.appendChild(lists);

      //result = "";
    }
  }
}
