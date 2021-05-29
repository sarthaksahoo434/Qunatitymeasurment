$(document).ready(function(){
    let lengths = ["Meter", "milimeter", "centimeter", "kilometer", "inch", "Micrometer", "Mile", "foot"];
    let lengthvalues = ["39.3701", "0.03937", "0.393", "39370.1", "1", "3.937", "63360", "12"];

    let setOptions= () => {
    let row = '';
     for(var i = 0; i < lengths.length; i++) {
    row += `<option value = ${lengthvalues[i]}>${lengths[i]}</option>`
    }
 document.getElementById("from").innerHTML=row;
 document.getElementById("to").innerHTML=row;    
    }
    setOptions();

  let calculate = () =>{
 $(".callfunc").change(function(){
    var input1 =document.getElementById("from").value;
    var input2 = document.getElementById("to").value;
    var input3 = document.getElementById("num1").value;
    $("#num2").val((input3*input1)/input2);
 });
}
calculate();

$("#b1").click(function() {
    options = lengths;
    values = lengthvalues;
    setOptions();
    calculate();
    $("#b1").addClass("card1");
    $("#b2").removeClass("card2");
    $("#b3").removeClass("card3");
});
})
$(document).ready(function(){
   let temperature = ["Celsius", "Fahrenheit", "Kelvin"];
   let temperaturevalues = ["274.15", "255.92", "1"];
   let setOptions= () => {
   let row = '';
   for(var i = 0; i < temperature.length; i++) {
   row += `<option value = ${temperaturevalues[i]}>${temperature[i]}</option>`
   }
   document.getElementById("from").innerHTML=row;
   document.getElementById("to").innerHTML=row;
   }
   setOptions();
   
   let calculate = () =>{
   $(".callfunc").change(function(){
       var input1 =document.getElementById("from").value;
       var input2 = document.getElementById("to").value;
       var input3 = document.getElementById("num1").value;
       $("#num2").val((input3*input1)/input2);
   });
   }
   calculate();
   
   $("#b2").click(function() {
           options = temperature;
           values = temperaturevalues;
           setOptions();
           calculate();
           $("#b2").addClass("card2");
           $("#b1").removeClass("card1");
           $("#b3").removeClass("card3");
       });
   });
   $(document).ready(function(){
      let volume = ["Litres", "Millilitres", "Gallon"];
       let volumevalues = ["0.2641", "1000", "1"];
      
       let setOptions= () => {
      let row = '';
      for(var i = 0; i < volume.length; i++) {
      row += `<option value = ${volumevalues[i]}>${volume[i]}</option>`
      }
      document.getElementById("from").innerHTML=row;
      document.getElementById("to").innerHTML=row;
      }
      setOptions();
      
      let calculate = () =>{
      $(".callfunc").change(function(){
          var input1 =document.getElementById("from").value;
          var input2 = document.getElementById("to").value;
          var input3 = document.getElementById("num1").value;
          $("#num2").val((input3*input1)/input2);
      });
      }
      calculate();
      
      $("#b3").click(function() {
          options = volume;
          values = volumevalues;
          setOptions();
          calculate();
          $("#b3").addClass("card3");
          $("#b1").removeClass("card1");
          $("#b2").removeClass("card2");
      });
      });
      
         