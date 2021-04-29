
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

        if(file.size > 1024*1024){
            alert('Please choose files smaller than 1mb, otherwise you may crash your browser. \nThis is a known issue. See the tutorial.');
            return;
        }

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

        // The HTML5 FileReader object will allow us to read the 
        // contents of the  selected file.

        let reader = new FileReader();
        
                    let selectedValue = document.getElementById("select1").value;

        if(body.hasClass('encrypt')){

            // Encrypt the file!
            if(selectedValue === "aes"){
            reader.onload = function(e){

                // Use the CryptoJS library and the AES cypher to encrypt the 
                // contents of the file, held in e.target.result, with the password

                let encrypted = CryptoJS.AES.encrypt(e.target.result, password);

                // The download attribute will cause the contents of the href
                // attribute to be downloaded when clicked. The download attribute
                // also holds the name of the file that is offered for download.

                a.attr('href', 'data:application/octet-stream,' + encrypted);
                a.attr('download', file.name + '.encryptedAes');

                step(4);
            };

            // This will encode the contents of the file into a data-uri.
            // It will trigger the onload handler above, with the result

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
        
        if (body.hasClass('decrypt')){

            // Decrypt it!
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


    // Helper function that moves the viewport to the correct step div

    function step(i){

        if(i == 1){
            back.fadeOut();
        }
        else{
            back.fadeIn();
        }

        // Move the #stage div. Changing the top property will trigger
        // a css transition on the element. i-1 because we want the
        // steps to start from 1:

        stage.css('top',(-(i-1)*100)+'%');
    }

});
