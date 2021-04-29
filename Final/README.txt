HTML
<div id="stage"> is used for CSS implementation
< id="step1-step4"> is used for telling the CSS what to display
<img> is for the logo 
<div class="content"> is used for the CSS to distingish what type of content is used
<a class= button> is used for having a link to act as a button
<select id="select1"> Is used for creating a dropdown menu
<option value="aes - tripledes"> is used for the options of the dropdown menu
<div class="content if-encrypt"> & <div class="content if-decrypt">   If user selects Encrypt it displays the encryption or decryption screen.
<a class="button browse blue"> another button that is also a link to allow users to select a file off of their computer
<input type="file" id="encrypt-input"> & <input type="file" id="decrypt-input"> used to show that file was the input type a file and to 
make sure a file was selected in the JS.
<div class="content if-encrypt"> shows the corresponding CSS if the user has selected encyrpt.
<input type="password"> for the password to encrypt/decrypt
<a class="button download green">Download</a> link to download the file to users computer
 <script src="http://cdnjs.cloudflare.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> is used to import Jquery library
 <script src="asset.js"></script> used to import our JS
 <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.9-1/crypto-js.js"></script> is used to import cryptojs library
 
CSS


Javascript
$(function(){ its used for running the entire javascript
let body=$('body'), body is used for the body of the HTML it is easier than typing $('body')
stage = $('#stage'), stage is used for the stages
back = $('a.back'); is used for the visual effect of the webpage
$('#step1 .encrypt').click(function(){  it sets the encrypt attributes for the whole page
$('#step1 .decrypt').click(function(){ it sets the decrypt attributes for the whole page
$('#step2 .button').click(function(){  &  $(this).parent().find('input').click(); triggers the file browser
$('#step2').on('change', '#encrypt-input', function(e){  &  $('#step2').on('change', '#decrypt-input', function(e){
 when file is uploaded it moves on to the next step
if(e.target.files.length!=1){ if a file is not selected there is an alert
let input = $(this).parent().find('input[type=password]'), To retrieve the password from the HTML file
a = $('#step4 a.download'), is for starting the download 
password = input.val(); is assigning the password into the variable
 input.val(''); 
 if(password.length<5){ password needs to be atleast 5 characters long
 let reader = new FileReader(); creates a new filereader
 let selectedValue = document.getElementById("select1").value; = this is for getting the data from the dropdown menu
 if(body.hasClass('encrypt')){ if encrypt was selected in the beginning it runs the encryption part of the Jquery
 if(selectedValue === "aes- tripledes"){ it runs the if function depending on which drop down selection that was made
      reader.onload = function(e){ sets up the function and that is run when reader.readAsDataURL(file); is executed the    reader.onload encrypts the file and has it downloaded by using the lines below.
           let encrypted = CryptoJS.AES.encrypt(e.target.result, password); The CryptoJs needed to encrypt the data.
            a.attr('href', 'data:application/octet-stream,' + encrypted); this creates a link to be downloaded
            a.attr('download', file.name + '.encryptedAes'); this actually downloads the link
             ^^^THIS IS THE SAME FOR ALL OF THE ENCRYPTIONS WITH MINOR FILE TAG CHANGES
 
   if (body.hasClass('decrypt')){ if decrypt was selected in the beginning it runs the decryption part of the Jquery
   

  





