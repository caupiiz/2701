jQuery(document).ready(function($) {
    //Contact
    $('form.contactForm').submit(function() {
        subject = $('#subject').val();
        email = 'club.algoritmia.upiiz@gmail.com'
        console.log(subject, email);

        return false;
    });
});
