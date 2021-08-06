var resultBtn= document.getElementById("btn1");
resultBtn.addEventListener("click", divisionFunction);

function divisionFunction() {
    var loopValue =  document.getElementById("loopValue").value;
    var divisionNumber1 =  document.getElementById("divNumber1").value;
    var divisionNumber2 =  document.getElementById("divNumber2").value;
    var text="";
    var i;
    for (i = 1; i <= loopValue; i++) 
    {
        if (i % divisionNumber1 == 0 && i % divisionNumber2 == 0) {
          text += "Bish-Bosh" + ", ";
        } else if (i %divisionNumber1 == 0) {
            text+="Bisch" + ", ";
        } else if (i % divisionNumber2 == 0) {
            text+="Bosh" + ", ";
        } else {
          text+=i + ", ";
        }
    }
    text=text.slice(0,text.length-2);
    document.getElementById("result").innerHTML = text;
}
