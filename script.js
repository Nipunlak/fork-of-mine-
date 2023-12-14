function toggleNavbar() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }



  // toogleNavabr fution starts when a user click on the humburgor icon. this function first create 
  // first select the navbar tag with id "navbar" and save it the variable x.
  // then it cheacks for x variable classs name is equalt to "navbar" if yes
  //the responsive class added to the x. in not the class name "navbar"will added.
  // this will help to toggle the navbar when user click on the humburgar icon