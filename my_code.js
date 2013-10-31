 $(document).ready(function() {
    
     // bind form using ajaxForm (powered by jQuery form plugin)
     $('#myForm').ajaxForm({ 
	 success: showResponse, //when the php form returns a success, call showResponse function
		resetForm: false //after submitting the form, reset it
     }); 
		
     $("#inputbin").on('input', function() {

	 $(this).submit();
});


     //response function of echo.php
     function showResponse(responseText, statusText, xhr, $form) { 
	
	 var direction = $("input[name=direction]:checked").val();
	 var response = responseText;
	 var remainder = new Array();
	 var finalresult = "";
	 var i = 0;

	 var base = 2;

 	 //Binary to Decimal
	 if (direction==2)
	 {
	     var responsetoarray = response.split("");
	     var lengthbinary = response.length;
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
	     
	     finalresult = sumresult;
	    
	 }
	 if (direction==1)
	 {    
	 
	     //Decimal to binary
	 
	     //Do division and store remainder in array
	     var responseint = parseInt(response);
	     while (responseint>0)
	     {
		 remainder[i]  = responseint%base;
		 responseint = Math.floor(responseint/base);
		 //alert(response%base);
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
	     
	     result_str = result.toString();
	     var result_str2 = result_str.replace(/,/g,""); 
	     finalresult = result_str2;

	 }
	 
	 //give out final result
	 $('#result').html('');
	 $("#result").hide().append(finalresult).fadeIn(200);
	 $("#inputdec").val(finalresult);

     }
	
}); 

