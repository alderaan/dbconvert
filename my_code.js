 $(document).ready(function() {
    
     // bind form using ajaxForm (powered by jQuery form plugin)
     $('#myForm').ajaxForm({ 
	 success: showResponse, //when the php form returns a success, call showResponse function
		resetForm: true //after submitting the form, reset it
     }); 
		
     //response function of echo.php
     function showResponse(responseText, statusText, xhr, $form) { 
	
	 var response = parseInt(responseText);
	 var base = 2;
	 var remainder = new Array();
	 var i = 0;

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
	 alert(result_str);

     }
	
}); 