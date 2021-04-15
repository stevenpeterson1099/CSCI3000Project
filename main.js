function myFunction () {
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
