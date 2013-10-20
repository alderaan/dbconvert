 $(document).ready(function() {
    
     // bind form using ajaxForm (powered by jQuery form plugin)
     $('#myForm').ajaxForm({ 
	 success: showResponse, //when the php form returns a success, call showResponse function
		resetForm: true //after submitting the form, reset it
     }); 
		
     //response function 
     function showResponse(responseText, statusText, xhr, $form) { 
	
	 var response = parseInt(responseText);
	 base = 2;
	 var remainder = new Array();
	 	 
	 var i = 1;

	 while (response>0)
	 {
	 
	     remainder[i]  = response%base;
	     response = Math.floor(response/base);
	     i++;

	    // alert(response);      
	 } 
 
	 lala = remainder.toString();
	 alert(lala);

     }
	
}); 