function listView() {
  document.getElementsByClassName("card")[0].setAttribute("class", "list");
}

function gridView() {
  document.getElementsByClassName("list")[0].setAttribute("class", "card");
}
