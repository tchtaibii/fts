function ft_display(value, value2, value3)
{
    var x = document.getElementById(value);
    var y = document.getElementById(value2);
    var z = document.getElementById(value3);

    if (value === "content1")
    {
        console.log("content1");
        var a = document.getElementById("choice1");
        var b = document.getElementById("choice2");
        var c = document.getElementById("choice3");
        a.style.borderBottom = "2px solid #4A3AFF";
        b.style.borderBottom = "0px solid #4A3AFF";
        c.style.borderBottom = "0px solid #4A3AFF";
    }
    else if (value === "content2")
    {
        console.log("content2");
        var a = document.getElementById("choice2");
        var b = document.getElementById("choice3");
        var c = document.getElementById("choice1");
        a.style.borderBottom = "2px solid #4A3AFF";
        b.style.borderBottom = "0px solid #4A3AFF";
        c.style.borderBottom = "0px solid #4A3AFF";
    }
    else {
        console.log("content3");
        var a = document.getElementById("choice3");
        var b = document.getElementById("choice2");
        var c = document.getElementById("choice1");
        a.style.borderBottom = "2px solid #4A3AFF";
        b.style.borderBottom = "0px solid #4A3AFF";
        c.style.borderBottom = "0px solid #4A3AFF";
    }
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
  }