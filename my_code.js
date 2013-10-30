 $(document).ready(function() {
    
     // bind form using ajaxForm (powered by jQuery form plugin)
     $('#myForm').ajaxForm({ 
	 success: showResponse, //when the php form returns a success, call showResponse function
		resetForm: true //after submitting the form, reset it
     }); 
		


     //response function of echo.php
     function showResponse(responseText, statusText, xhr, $form) { 
	
	 var response = parseInt(responseText);
	 var remainder = new Array();
	 var i = 0;

	 var base = 2;

 	 //Binary to Decimal
	 var responsetoarray = response.toString().split("");
	 var lengthbinary = response.toString().length;
	 var powers = new Array();
	 var sumresult = 0;
	 
	 for (var i=0;i<lengthbinary;i++)
	 { 
	     powers[i]=Math.pow(2,(lengthbinary-1-i));
	     if (responsetoarray[i]==1)
	     {
		 sumresult = sumresult + powers[i];
		 		 
	     }
	 }
	 
	 $('#result').html('');
	 $("#result").append(sumresult);
	 

	 /*
	 //Do division and store remainder in array
	 while (response>0)
	 {
	     remainder[i]  = response%base;
	     response = Math.floor(response/base);
	     i++;
         } 
 	 
	 //change direction of array
	 var result = new Array();
	 var j = remainder.length;
	 var k = 0;

	 while(j--)
	 {
	     result[k] = remainder[j];
	     k++;
	 }
	 
	 


	 //give out final result
	 result_str = result.toString();
	 var result_str2 = result_str.replace(/,/g,""); 
	 $('#result').html('');
	 $("#result").append(result_str2);

	 
	 */



     }
	
}); 

/*
33 - 33 = 0 = j-0
32 - 31 = 1 0 j-1 = j- (
31  -29  = 2
29  -26  = 3
28  -22  = 4
6  -1  = 5
*/