display();

function display() {
  var dvdetails = JSON.parse(localStorage.getItem("deliverydetails"));
  document.querySelector("#clear").textContent = dvdetails.name;
  document.querySelector("#clear1").textContent = dvdetails.address;
  document.querySelector("#clear2").textContent = dvdetails.number;
}
