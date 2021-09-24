function boxenable1()
{
    document.getElementById ('s1').style.display ='block';
        document.getElementById ('s2').style.display ='none';
        document.getElementById ('s3').style.display ='none';
        document.getElementById ('s4').style.display ='none';
        document.getElementById ('s5').style.display ='none';
        document.getElementById ('s6').style.display ='none';
        document.getElementById ('s7').style.display ='none';
        document.getElementById ('s8').style.display ='none';
        document.getElementById ('s2').value=0;
        document.getElementById ('s3').value=0;
        document.getElementById ('s4').value=0;
        document.getElementById ('s5').value=0;
        document.getElementById ('s6').value=0;
        document.getElementById ('s7').value=0;
        document.getElementById ('s8').value=0;
        let totnum = 1;
    }

    function boxenable2()
{
    document.getElementById ('s1').style.display ='block';
        document.getElementById ('s2').style.display ='block';
        document.getElementById ('s3').style.display ='none';
        document.getElementById ('s4').style.display ='none';
        document.getElementById('s3').value=0;
        document.getElementById('s4').value=0;
        document.getElementById ('s5').style.display ='none';
        document.getElementById ('s6').style.display ='none';
        document.getElementById ('s7').style.display ='none';
        document.getElementById ('s8').style.display ='none';
        document.getElementById ('s5').value=0;
        document.getElementById ('s6').value=0;
        document.getElementById ('s7').value=0;
        document.getElementById ('s8').value=0;
        let totnum=2;
    }

    function boxenable3()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='none';
            document.getElementById ('s5').style.display ='none';
            document.getElementById ('s6').style.display ='none';
            document.getElementById ('s7').style.display ='none';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s4').value=0;
            document.getElementById ('s5').value=0;
            document.getElementById ('s6').value=0;
            document.getElementById ('s7').value=0;
            document.getElementById ('s8').value=0;
            let totnum = 3;
        }
    
        function boxenable4()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='block';
            document.getElementById ('s5').style.display ='none';
            document.getElementById ('s6').style.display ='none';
            document.getElementById ('s7').style.display ='none';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s5').value=0;
            document.getElementById ('s6').value=0;
            document.getElementById ('s7').value=0;
            document.getElementById ('s8').value=0;
            let totnum = 4;
        }
        function boxenable5()
        {
            document.getElementById ('s1').style.display ='block';
                document.getElementById ('s2').style.display ='block';
                document.getElementById ('s3').style.display ='block';
                document.getElementById ('s4').style.display ='block';
                document.getElementById ('s5').style.display ='block';
                document.getElementById ('s6').style.display ='none';
                document.getElementById ('s7').style.display ='none';
                document.getElementById ('s8').style.display ='none';
                document.getElementById ('s6').value=0;
                document.getElementById ('s7').value=0;
                document.getElementById ('s8').value=0;
                let totnum = 5;
            }

            function boxenable6()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='block';
            document.getElementById ('s5').style.display ='block';
            document.getElementById ('s6').style.display ='block';
            document.getElementById ('s7').style.display ='none';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s7').value=0;
            document.getElementById ('s8').value=0;
            let totnum = 6;
        }
        function boxenable7()
    {
        document.getElementById ('s1').style.display ='block';
            document.getElementById ('s2').style.display ='block';
            document.getElementById ('s3').style.display ='block';
            document.getElementById ('s4').style.display ='block';
            document.getElementById ('s5').style.display ='block';
            document.getElementById ('s6').style.display ='block';
            document.getElementById ('s7').style.display ='block';
            document.getElementById ('s8').style.display ='none';
            document.getElementById ('s8').value=0;
            let totnum = 7;
        }
    
    
        
        function boxenable8()
        {
            document.getElementById ('s1').style.display ='block';
                document.getElementById ('s2').style.display ='block';
                document.getElementById ('s3').style.display ='block';
                document.getElementById ('s4').style.display ='block';
                document.getElementById ('s5').style.display ='block';
                document.getElementById ('s6').style.display ='block';
                document.getElementById ('s7').style.display ='block';
                document.getElementById ('s8').style.display ='block';
                let totnum = 8;
            }
        
function cgpa()
{
   var s1 = document.getElementById("s1").value;
    var s2 = document.getElementById("s2").value;
    var s3 = document.getElementById("s3").value;
    var s4 = document.getElementById("s4").value;
    var s5 = document.getElementById ('s5').value;
    var s6=  document.getElementById ('s6').value;
    var s7=  document.getElementById ('s7').value;
    var s8=  document.getElementById ('s8').value;
   
    let sum = parseFloat(s1)+parseFloat(s2)+parseFloat(s3)+parseFloat(s4)+parseFloat(s5)+parseFloat(s6)+parseFloat(s7)+parseFloat(s8);
     
     if(document.getElementById("s8").value!=0){
         result = sum / 8 ;
     }
     else if(document.getElementById("s7").value!=0)
     {
         result = sum / 7 ;
     }
     else if(document.getElementById("s6").value!=0)
     {
         result = sum / 6 ;
     }
     else if(document.getElementById("s5").value!=0)
     {
         result = sum / 5 ;
     }
     else if(document.getElementById("s4").value!=0)
     {
         result = sum / 4 ;
     }
     else if(document.getElementById("s3").value!=0)
     {
         result = sum / 3 ;
     }
     else if(document.getElementById("s2").value!=0)
     {
         result = sum / 2 ;
     }
     else if(document.getElementById("s2").value!=0)
     {
         result = sum / 2 ;
     }

     else
     {
         result = sum / 1 ;
     }
     
    if(!isNaN(result))
    {
        document.getElementById("answer").value="your CGPA is  " + result + "                               (reset before next calculation)";
    }
}
        
function findbmi()
{
    let weight = document.frm.weight.value
    let height = document.frm.height.value/100
    if(weight > 0 && height > 0){	
        let finalBmi = weight/(height*height)
        document.frm.bmi.value = finalBmi.toFixed(3);
        if(finalBmi < 18.5){
        document.frm.stat.value = "Underweight !"
            }
        if(finalBmi > 18.5 && finalBmi < 25){
        document.frm.stat.value = "Normal weight"
            }
        if(finalBmi > 25 &&  finalBmi <30){
        document.frm.stat.value = "Overweight."
            }
        if(finalBmi > 30){
        document.frm.stat.value = "Obese!"
            }
            }
            else{
            alert("Incorrect data ! Try again.")
            }
        
            }



function cuboidsa()
{
    var l = document.frm1.length.value
    var b = document.frm1.width.value
    var h = document.frm1.height.value

    var answer = 2 * (parseFloat(l*b)+parseFloat(b*h)+parseFloat(h*l));
    document.frm1.res.value = answer + " cm sq units";
}

function cuboidvolume()
{
    var l = document.frm1.length.value
    var b = document.frm1.width.value
    var h = document.frm1.height.value

    var answer = l*b*h;
    document.frm1.res.value = answer + " cm cube units";
}

function cylindersa()
{
    var r = document.frm2.radius.value
    var h1 = document.frm2.height.value

    var answer1 = 2*3.14*r*(parseFloat(r)+parseFloat(h1));
    document.frm2.res.value = answer1 + " cm sq units";
}

function cylindervol()
{
    var r = document.frm2.radius.value
    var h1 = document.frm2.height.value

    var answer1 = 3.14*r*r*h1;
    document.frm2.res.value = answer1 + " cm cube units";
}

function spheresa()
{
    var r =document.frm3.radius.value

    var answer2 = 4*3.14*r*r;
    document.frm3.res.value = answer2 + " cm sq units";
}

function spherevol()
{
    var r =document.frm3.radius.value

    var answer2 = 1.33*3.14*r*r*r;
    document.frm3.res.value = answer2 + " cm cube units";
}

function conesa()
{
    var r = document.frm4.radius.value
    var h1 = document.frm4.height.value
    var rsq = r*r;
    var hsq = h1*h1;
    var tot = (parseFloat(rsq)+parseFloat(hsq));
    var l = Math.sqrt(tot);
    var answer1 = 3.14*r*(parseFloat(r)+parseFloat(l));
    document.frm4.res.value = answer1 + " cm sq units";
}

function conevol()
{
    var r = document.frm4.radius.value
    var h1 = document.frm4.height.value

    var answer1 = (3.14*r*r*h1)/3 ;
    document.frm4.res.value = answer1 + " cm cube units";
}
