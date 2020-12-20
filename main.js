var myDiv = document.getElementById("m"),
    Heading = document.getElementById("h"),
    n = prompt("please Enter Number To Proccess "),
    choose = prompt("Enter 1 if you want summation and enter 2 if you want multiplication"); 

if (choose == 1 ){
  Heading.innerHTML = "Summation of " + n;

  for (i = 1 ; i <= 10 ; i = i + 1){
      var newElement = document.createElement("p"),
          text = document.createTextNode( i + " + " + n + " = " + (i + parseInt(n)));

      newElement.appendChild(text);
      myDiv.appendChild(newElement);

  }
} else if(choose == 2 ) {
    Heading . innerHTML = "multiplication of " + n;

    for (i = 1 ; i <= 10 ; i = i + 1){
        var newElement = document.createElement("p"),
            text = document.createTextNode( i + " * " + n + " = " +  (i * parseInt(n)));
        newElement.appendChild(text);
        myDiv.appendChild(newElement);

    }
}
