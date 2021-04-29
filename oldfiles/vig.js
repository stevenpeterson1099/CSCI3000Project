//Vigenere Cipher

function vig(){
	
	var txt = document.getElementById('message').value;
	var key = document.getElementById('key').value;
	let type = document.getElementsByName('type');
	
	if(type[0].checked)
		vigEncrypt(txt, key);
	else if(type[1].checked)
		vigDecrypt(txt, key);
	
	event.preventDefault();
}

function vigEncrypt(txt, key) {
	
	//Vigenere uses capital letters only for message and key
	txt = txt.toUpperCase();
	key = key.toUpperCase();
	
	//object for converting letters to a number 0-25
	let dict = {
		'A':0,  'B':1,  'C':2,  'D':3,  'E':4,
		'F':5,  'G':6,  'H':7,  'I':8,  'J':9,
		'K':10, 'L':11, 'M':12, 'N':13, 'O':14,
		'P':15, 'Q':16, 'R':17, 'S':18, 'T':19,
		'U':20, 'V':21, 'W':22, 'X':23, 'Y':24,
		'Z':25
	};
	
	//generating key to match length of txt	
	for(let i = 0; key.length < txt.length; i++){
		if(i == txt.length)
			i = 0; //start at begining of keyword
		key += key.charAt(i);
	}
	
	//encrypting
	let txtEncrypt = "";
	for(let i = 0; i < txt.length; i++){
		//algorithm encrypted char = (plaintext char + key char) mod 26
		//chars are treated as numbers
		//mod 26 has letters loop through alphabet with 26 letters
		let num = (dict[txt.charAt(i)] + dict[key.charAt(i)]) % 26;
		Object.keys(dict).forEach(function(letter) {
			if(dict[letter] == num){
				txtEncrypt += letter;
			}
		});
	}
	
	document.getElementById('answer').innerHTML = txtEncrypt;
	
}

function vigDecrypt(txt, key){
	
	//Vigenere uses capital letters only for message and key
	txt = txt.toUpperCase();
	key = key.toUpperCase();
	
	//object for converting letters to a number 0-25
	let dict = {
		'A':0,  'B':1,  'C':2,  'D':3,  'E':4,
		'F':5,  'G':6,  'H':7,  'I':8,  'J':9,
		'K':10, 'L':11, 'M':12, 'N':13, 'O':14,
		'P':15, 'Q':16, 'R':17, 'S':18, 'T':19,
		'U':20, 'V':21, 'W':22, 'X':23, 'Y':24,
		'Z':25
	};
	
	//generating key to match length of txt	
	for(let i = 0; key.length < txt.length; i++){
		if(i == txt.length)
			i = 0; //start at begining of keyword
		key += key.charAt(i);
	}
	
	//decrypt
	let txtDecrypt = "";
	for(let i = 0; i < txt.length; i++){
		//algorithm decrypted char = (encrypted char - key char + 26) mod 26
		//adding 26 prevents negative number
		//chars are treated as numbers
		//mod 26 has letters loop through alphabet with 26 letters
		let num = (dict[txt.charAt(i)] - dict[key.charAt(i)] + 26) % 26;
		Object.keys(dict).forEach(function(letter) {
			if(dict[letter] == num){
				txtDecrypt += letter;
			}
		});
	}
	
	document.getElementById('answer').innerHTML = txtDecrypt;
	
}
