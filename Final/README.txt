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
html - overflow:hidden - sets the desired behavior for an element's overflow
a:visited - selector is used to select visited links
a:hover -  used to select elements when you mouse over them
selection, footer, header, aside - used to define/block different parts of a web page(top and bottom)
body - tag defines the document's body
#stage - allows multiple steps in html project/controls different styles in css
stage > div - divide tag allows different sections within stages in html/css without <br> tags
h1/h2 - in css, different tags for larger print text with customization
content - main content css
.content input - css for file upload
body.encrypt/decrypt
.button - main button design css
.button:hover/before/green/etc. - buttons with included traits for individual css 
step - background colors for each phase of webpage
step3 input - password input box css
