// Maybe Try if(document.getElementById("des").selected = true){}  or  var selectedValue = document.getElementById("ciphers").value, if(selectedValue = des){

/*<input type="file" onchange="readFile(this)">

<script>
function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function() {
    console.log(reader.result);
  };
	*/
function necrypt(){
var reader = new FileReader(); 
var selectedValue = document.getElementById("ciphers").value;
let password = document.getElementById("pwd");
let subm = document.getElementById("sub");

if(document.getElementById("encrypt").checked){
	
  	if (selectedValue === 'aes') {
		
		function readFile(input) {
  	let file = input.files[0];

  	reader.readAsText(file);

  	reader.onload = function() {
   	 var encrypted = CryptoJS.TripeAES.encrypt(reader.result, password);
                a.attr('download', file.name + '.encrypted');
  	};
		
			
			reader.onload = function(){

                var encrypted = CryptoJS.TripeAES.encrypt(reader.result, password);
                a.attr('download', file.name + '.encrypted');
    		}
  	} 
	
	else if (selectedValue === 'des') {
    		
			
			reader.onload = function(encodeDES){

                var encrypted = CryptoJS.TripeDES.encrypt(e.target.result, password);
                a.attr('download', file.name + '.encrypted');
            
    		}
 	 } 
	
	else if (selectedValue === 'rc4') {
			
			reader.onload = function(e){

                var encrypted = CryptoJS.RC4.encrypt(e.target.result, password);
                a.attr('download', file.name + '.encrypted');
		}
	}
	  
	else if (selectedValue === 'rabbit') {
			
			reader.onload = function(encoderabbit){

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
			
			reader.onload = function(dencodeDES){

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
subm.download=objFile.name + '.dec';
