function myFunction () {
  
  document.getElementById('encrypt-input').addEventListener('change', readFileAsString)
function readFileAsString() {
    let files = this.files;
    if (files.length === 0) {
        console.log('No file is selected');
        return;
    }

    let reader = new FileReader();
    reader.onload = function(event) {
        console.log('File content:', event.target.result);
    };
    reader.readAsText(files[0]);
}
  
  
  const ddl = document.getElementById('ciphers')
  const selectedValue = ddl.options[ddl.selectedIndex].value
  if (selectedValue === 'aes') {
    function encodeAES () {

    }
  } else if (selectedValue === 'des') {
    function encodeDES () {

    }
  } else if (selectedValue === 'rc4') {
    function rc4(key, str) {
	var s = [], j = 0, x, res = '';
	for (var i = 0; i < 256; i++) {
		s[i] = i;
	}
	for (i = 0; i < 256; i++) {
		j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
	}
	i = 0;
	j = 0;
	for (var y = 0; y < str.length; y++) {
		i = (i + 1) % 256;
		j = (j + s[i]) % 256;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
		res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
	}
	return res;
}
  } else if (selectedValue === 'blowfish') {
    function encodeBLOWFISH () {

    }
  } else if (selectedValue === 'vigenere') {
    function encodeVIG () {

    }
  }
}





//aDecsavefile = ID of download button
aDecsavefile.download=objFile.name + '.dec';
