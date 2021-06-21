//todo
const todobtn = document.getElementById("todo-btn");
const todolists = document.getElementById("todolists");
const remove = document.getElementById("rmvbtn");

todobtn.addEventListener("click", addtodo);

function addtodo() {
  const textid = document.getElementById("textid").value;
  todolists.addEventListener("click", removeorcomplete);

  if (textid === " ") {
    alert("plese add something for todo!!! ");
  } else {
    const list_div = document.createElement("div");
    list_div.id = "list_div";

    const list_li = document.createElement("li");
    list_li.id = "list_id";

    const list_p = document.createElement("p");

    list_p.innerHTML = textid;
    list_p.id = "list_p";

    const list_cmpbtn = document.createElement("button");
    list_cmpbtn.id = "cmpbtn";
    list_cmpbtn.innerHTML = "complete";
    var list_rmvbtn = document.createElement("button");
    list_rmvbtn.id = "rmvbtn";
    list_rmvbtn.innerHTML = "remove";

    list_li.appendChild(list_p);

    list_li.appendChild(list_rmvbtn);
    list_li.appendChild(list_cmpbtn);

    list_div.appendChild(list_li);
    todolists.appendChild(list_div);

    document.getElementById("textid").value = " ";
  }

  function removeorcomplete(e) {
    if (e.target.id === "rmvbtn") {
      const p = e.target.parentElement;
      p.remove();
    }
    if (e.target.id === "cmpbtn") {
      const cmpdata = e.target.parentElement.children[0].innerHTML;

      completedata(cmpdata, e);
    }
  }

  const datas = [];
  function completedata(cmpdata, e) {
    datas.push(cmpdata);
    console.log(datas);
    e.target.parentElement.remove();

    const completed_lists = document.getElementById("completedlists");
    const completed_li = document.createElement("li");
    completed_li.id = "completed_id";
    completed_lists.appendChild(completed_li);

    datas.forEach((data) => {
      completed_li.innerHTML = data;
    });

    const removecmp = document.getElementById("completed_id");
    removecmp.addEventListener("dblclick", function () {
      removecmp.remove();
    });
  }
}
