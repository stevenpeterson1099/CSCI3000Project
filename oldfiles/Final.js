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
		


  	reader.onload = function(e) {
   	 var encrypted = CryptoJS.AES.encrypt(reader.result, password);
		 a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encrypted');
  	};
		reader.readAsDataURL(file);
		
			
			
  	}
	}
	
	else if (selectedValue === 'des') {
    		
			
			reader.onload = function(encodeDES){

                var encrypted = CryptoJS.TripleDES.encrypt(e.target.result, password);
		 a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encrypted');
            
    		}
		reader.readAsDataURL(file);
 	 } 
	
	else if (selectedValue === 'rc4') {
			
var plaintextbytes=  CryptoJS.RC4.encrypt(reader.result, password);
var blob=new Blob([plaintextbytes], {type: 'application/download'});
		var blobUrl=URL.createObjectURL(blob);
		aDecsavefile.href=blobUrl;
		aDecsavefile.download=objFile.name + '.dec';
	}
	  
	else if (selectedValue === 'rabbit') {
			
			reader.onload = function(encoderabbit){

                var encrypted = CryptoJS.rabbit.encrypt(e.target.result, password);
		 a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encrypted');
    		}
		reader.readAsDataURL(file);
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
			
			var decrypted = CryptoJS.TripleDES.decrypt(e.target.result, password)
                                        .toString(CryptoJS.enc.Latin1);
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
  
  //download("hello.txt","This is the content of my file :)");




function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

/* 
var plaintextbytes=  CryptoJS.RC4.encrypt(e.target.result, password);
var blob=new Blob([plaintextbytes], {type: 'application/download'});
		var blobUrl=URL.createObjectURL(blob);
		aDecsavefile.href=blobUrl;
		aDecsavefile.download=objFile.name + '.dec';
		*/



