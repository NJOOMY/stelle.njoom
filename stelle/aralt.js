function submitReservation() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var date = document.getElementById("date").value;

  
  if (name === "" || email === "" || date === "") {
    alert("Please fill in all fields.");
  } else {

    alert("Reservation successful we are wating for you !\n\nName: " + name + "\nEmail: " + email + "\nDate: " + date);


  }
}

