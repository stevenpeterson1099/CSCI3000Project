function visible() {
     var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 
function visible2() {
     var x = document.getElementById("myInput2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
} 
$(function(){

    let body = $('body'),
        stage = $('#stage'),
        back = $('a.back');

    /* Step 1 */

    $('#step1 .encrypt').click(function(){
        body.attr('class', 'encrypt');

        // Go to step 2
        step(2);
    });

    $('#step1 .decrypt').click(function(){
        body.attr('class', 'decrypt');
        step(2);
    });

    /* Step 2 */

    $('#step2 .button').click(function(){
        // Trigger the file browser dialog
        $(this).parent().find('input').click();
    });

    // Set up events for the file inputs

    let file = null;

    $('#step2').on('change', '#encrypt-input', function(e){

        // Has a file been selected?

        if(e.target.files.length!=1){
            alert('Please select a file to encrypt!');
            return false;
        }

        file = e.target.files[0];

        step(3);
    });

    $('#step2').on('change', '#decrypt-input', function(e){

        if(e.target.files.length!=1){
            alert('Please select a file to decrypt!');
            return false;
        }

        file = e.target.files[0];
        step(3);
    });

    /* Step 3 */

    $('a.button.process').click(function(){

        let input = $(this).parent().find('input[type=password]'),
            a = $('#step4 a.download'),
            password = input.val();

        input.val('');

        if(password.length<5){
            alert('Please choose a longer password!');
            return;
        }

        let reader = new FileReader();
        
        let selectedValue = document.getElementById("select1").value;

        // Encrypting
        
        if(body.hasClass('encrypt')){

            
            if(selectedValue === "aes"){
            reader.onload = function(e){

                // We used the CryptoJS library to encrypt contents of the file, held in e.target.result, with the password

                let encrypted = CryptoJS.AES.encrypt(e.target.result, password);

                a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encryptedAes');

                step(4);
            };

            reader.readAsDataURL(file);
        }

        if(selectedValue === "des"){
            reader.onload = function(e){

                let encrypted = CryptoJS.DES.encrypt(e.target.result, password);

                a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encryptedDes');

                step(4);
            };

            reader.readAsDataURL(file);
        }

        if(selectedValue === "rc4"){
            reader.onload = function(e){

                let encrypted = CryptoJS.RC4.encrypt(e.target.result, password);

                a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encryptedRc4');

                step(4);
            };

            reader.readAsDataURL(file);
        }

            
          if(selectedValue === "rabbit"){
            reader.onload = function(e){

                let encrypted = CryptoJS.Rabbit.encrypt(e.target.result, password);

                a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encryptedRabbit');

                step(4);
            };

            reader.readAsDataURL(file);
        }


        if(selectedValue === "tripledes"){
            reader.onload = function(e){

                let encrypted = CryptoJS.TripleDES.encrypt(e.target.result, password);

                a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encryptedTdes');

                step(4);
            };

            reader.readAsDataURL(file);
            
        }


    }
        // decrypting
        
        if (body.hasClass('decrypt')){

            if(selectedValue === "des"){

            reader.onload = function(e){

                let decrypted = CryptoJS.DES.decrypt(e.target.result, password)
                                        .toString(CryptoJS.enc.Latin1);

                if(!/^data:/.test(decrypted)){
                    alert("Invalid pass phrase or file! Please try again.");
                    return false;
                }

                a.attr('href', decrypted);
                a.attr('download', file.name.replace('.encryptedDes',''));

                step(4);
            };

            reader.readAsText(file);

        }

        if (selectedValue === "aes") {
            reader.onload = function(e){

                let decrypted = CryptoJS.AES.decrypt(e.target.result, password)
                                        .toString(CryptoJS.enc.Latin1);

                if(!/^data:/.test(decrypted)){
                    alert("Invalid pass phrase or file! Please try again.");
                    return false;
                }

                a.attr('href', decrypted);
                a.attr('download', file.name.replace('.encryptedAes',''));

                step(4);
            };

            reader.readAsText(file);


        }
        if (selectedValue === "rc4") {
             reader.onload = function(e){

                let decrypted = CryptoJS.RC4.decrypt(e.target.result, password)
                                        .toString(CryptoJS.enc.Latin1);

                if(!/^data:/.test(decrypted)){
                    alert("Invalid pass phrase or file! Please try again.");
                    return false;
                }

                a.attr('href', decrypted);
                a.attr('download', file.name.replace('.encryptedRc4',''));

                step(4);
            };

            reader.readAsText(file);
        }

        if (selectedValue === "rabbit") {
            reader.onload = function(e){

                let decrypted = CryptoJS.Rabbit.decrypt(e.target.result, password)
                                        .toString(CryptoJS.enc.Latin1);

                if(!/^data:/.test(decrypted)){
                    alert("Invalid pass phrase or file! Please try again.");
                    return false;
                }

                a.attr('href', decrypted);
                a.attr('download', file.name.replace('.encryptedRabbit',''));

                step(4);
            };

            reader.readAsText(file);
        }
        
         if (selectedValue === "tripledes") {
            reader.onload = function(e){

                let decrypted = CryptoJS.TripleDES.decrypt(e.target.result, password)
                                        .toString(CryptoJS.enc.Latin1);

                if(!/^data:/.test(decrypted)){
                    alert("Invalid pass phrase or file! Please try again.");
                    return false;
                }

                a.attr('href', decrypted);
                a.attr('download', file.name.replace('.encryptedTdes',''));

                step(4);
            };

            reader.readAsText(file);
        }

        }


    });




    function step(i){

        if(i == 1){
            back.fadeOut();
        }
        else{
            back.fadeIn();
        }

       
        stage.css('top',(-(i-1)*100)+'%');
    }

});
