/*function myFunction () {
  
  document.getElementById('encrypt-input').addEventListener('change', readFileAsString)
function readFileAsString() {
    let files = this.files;
    if (files.length === 0) {
        console.log('No file is selected');
        return;
    } */

    let reader = new FileReader();
    reader.onload = function(event) {
        console.log('File content:', event.target.result);
    };
    reader.readAsText(files[0]);
}
  
  
  var reader = new FileReader(); 

//Encrypt


// Maybe Try if(document.getElementById("des").selected = true){}  or  var selectedValue = document.getElementById("ciphers").value, if(selectedValue = des){

var selectedValue = document.getElementById("ciphers").value
	
function necrypt(){

if(document.getElementById("encrypt").checked){
	
  	if (selectedValue === 'aes') {
    		function encodeAES () {
			
			reader.onload = function(e){

                var encrypted = CryptoJS.TripeAES.encrypt(e.target.result, password);
                a.attr('download', file.name + '.encrypted');
    		}
  	} 
	
	else if (selectedValue === 'des') {
    		function encodeDES () {
			
			reader.onload = function(e){

                var encrypted = CryptoJS.TripeDES.encrypt(e.target.result, password);
                a.attr('download', file.name + '.encrypted');
            };
    		}
 	 } 
	
	else if (selectedValue === 'rc4') {
		function encoderc4 () {
			
			reader.onload = function(e){

                var encrypted = CryptoJS.RC4.encrypt(e.target.result, password);
                a.attr('download', file.name + '.encrypted');
		}
	}
	  
	else if (selectedValue === 'rabbit') {
    		function encodeBLOWFISH () {
			
			reader.onload = function(e){

                var encrypted = CryptoJS.rabbit.encrypt(e.target.result, password);
                a.attr('download', file.name + '.encrypted');
    		}
  	}
	
	else if (selectedValue === 'vigenere') {
   		function encodeVIG () {
    		}
  	}
  }

//decrypt

if(selectedValue === 'decrypt'){
	
  const ddl = document.getElementById('ciphers')
  const selectedValue = ddl.options[ddl.selectedIndex].value
  if (selectedValue === 'aes') {
    function encodeAES () {
    		}
  	} 
	
	else if (selectedValue === 'des') {
    		function dencodeDES () {
			
			reader.onload = function(e){

                // Use the CryptoJS library and the AES cypher to encrypt the 
                // contents of the file, held in e.target.result, with the password

                var encrypted = CryptoJS.TripleDES.encrypt(e.target.result, password)
               
            };

            // This will encode the contents of the file into a data-uri.
            // It will trigger the onload handler above, with the result

            reader.readAsDataURL(file);
    		}
 	 } 
	
	else if (selectedValue === 'rc4') {
		function dencoderc4 () {
		}
	}
	  
	else if (selectedValue === 'rabbit') {
    		function dencodeBLOWFISH () {
    		}
  	}
	
	else if (selectedValue === 'vigenere') {
   		function dencodeVIG () {
    		}
  	}
  }
}





//sub = ID of download button
sub.download=objFile.name + '.dec';
