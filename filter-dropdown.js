var members = data.results[0].members, state;
//console.log(members[0].state);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("senate-data").classList.toggle("show");
  }
  
  function filterFunction(members, state) {
    var input, filter, ul, li, a, i;
    input = document.getElementById("senate-data");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase(state).indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }
  console.log(members[0].state);