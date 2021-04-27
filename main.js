	
document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById(btnDivEncrypt).click();
});


	var mode=null;
	var objFile=null;
	switchdiv('encrypt');

	function switchdiv(t) {
		if(t=='encrypt') {
			divEncryptfile.style.display='block';
			divDecryptfile.style.display='none';
			btnDivEncrypt.disabled=true;
			btnDivDecrypt.disabled=false;
			mode='encrypt';
		} else if(t=='decrypt') {
			divEncryptfile.style.display='none';
			divDecryptfile.style.display='block';
			btnDivEncrypt.disabled=false;
			btnDivDecrypt.disabled=true;
			mode='decrypt';
		}
	}

	function encvalidate() {
		if(txtEncpassphrase.value.length>=8 && txtEncpassphrase.value==txtEncpassphraseretype.value) { 
		  spnCheckretype.classList.add("greenspan");
		  spnCheckretype.classList.remove("redspan");
		  spnCheckretype.innerHTML='&#10004;';
		} else { 
		  spnCheckretype.classList.remove("greenspan");
		  spnCheckretype.classList.add("redspan");
  		  spnCheckretype.innerHTML='&#10006;';
		}

		if( txtEncpassphrase.value.length>=8 && txtEncpassphrase.value==txtEncpassphraseretype.value && objFile ) { btnEncrypt.disabled=false; } else { btnEncrypt.disabled=true; }
	}

	function decvalidate() {
		if( txtDecpassphrase.value.length>0 && objFile ) { btnDecrypt.disabled=false; } else { btnDecrypt.disabled=true; }
	}

	//drag and drop functions:
	//https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/File_drag_and_drop
	

	function selectfile(Files) {
		objFile=Files[0];
		displayfile()
		if(mode=='encrypt') { encvalidate(); } else if(mode=='decrypt') { decvalidate(); }
	}

	function displayfile() {
		var s;
		var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
		var bytes=objFile.size;
		var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
		if(i==0) { s=bytes + ' ' + sizes[i]; } else { s=(bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i]; }

		if(mode=='encrypt') { 
			spnencfilename.textContent=objFile.name + ' (' + s + ')'; 
		} else if(mode=='decrypt') {  
			spndecfilename.textContent=objFile.name + ' (' + s + ')'; 
		} 
	}

	function readfile(file){
		return new Promise((resolve, reject) => {
			var fr = new FileReader();  
			fr.onload = () => {
				resolve(fr.result )
			};
			fr.readAsArrayBuffer(file);
		});
	}

	
