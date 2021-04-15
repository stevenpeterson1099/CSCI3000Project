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
    function encodeRC4 () {

    }
  } else if (selectedValue === 'blowfish') {
    function encodeBLOWFISH () {

    }
  } else if (selectedValue === 'vigenere') {
    function encodeVIG () {

    }
  }
}
