function currencyselect(){
    var selectcurrency = document.getElementById("cs");
    if(selectcurrency.value=="u"){
        document.getElementById("p1").textContent ="$50";
        document.getElementById("p2").textContent ="$100";
        document.getElementById("p3").textContent ="$150";
    }
    else if(selectcurrency.value=="r"){
        document.getElementById("p1").textContent ="₹4,170";
        document.getElementById("p2").textContent ="₹8,342";
        document.getElementById("p3").textContent ="₹12,513";
    }
    else if(selectcurrency.value=="e"){
        document.getElementById("p1").textContent ="€46";
        document.getElementById("p2").textContent ="€92";
        document.getElementById("p3").textContent ="€138";
    }
}