function ft_display(value, value2, value3){
    var x = document.getElementById(value);
    var y = document.getElementById(value2);
    var z = document.getElementById(value3);
    console.log("display:none");
    // if (x.style.display == "none")
    // {
        
        x.style.display = "flex";
        y.style.display = "none";
        z.style.display = "none";
    // }
  }