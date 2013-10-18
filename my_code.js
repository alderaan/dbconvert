 $(document).ready(function() {


     // bind form using ajaxForm (powered by jQuery form plugin)
     $('#myForm').ajaxForm({ 
	 success: showResponse, //when the php form returns a success, call showResponse function
		resetForm: true //after submitting the form, reset it
     }); 
		
     //response function for newly created bubble
     function showResponse(responseText, statusText, xhr, $form) { 
	
	 alert(responseText);

     }
	
}); 