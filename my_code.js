 $(document).ready(function() {
    
     var direction = 0;
     var response = 0;
     
     $("#inputdec").on('input', function() {
	 direction = 1;
	 response = $("#inputdec").val();
	 conversion();
     });

     $("#inputbin").on('input', function() {
	 direction = 2;
	 response = $("#inputbin").val();
	 conversion();
     });
   
     function conversion() {
	 
	 //var response = responseText;
	 var remainder = new Array();
	 var finalresult = "";
	 var i = 0;

	 var base = 2;
	 
 	 //Decimal to binary
	 if (direction==1)
	 {    

	     //Do division and store remainder in array
	     var responseint = parseInt(response);
	     while (responseint>0)
	     {
		 
		 remainder[i]  = responseint%base;
		 responseint = Math.floor(responseint/base);
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

	     $("#inputbin").val(finalresult);

	 }    

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
	 
	     $("#inputdec").val(finalresult);
	     
	 }

     }
	
}); 

