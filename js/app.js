jQuery(document).ready(function($) {
    //Contact
    $('form.contactForm').submit(function() {
        subject = $('#subject').val();
        email = 'club.algoritmia.upiiz@gmail.com'
        subject = encodeURIComponent(subject.trim())
        console.log(email, subject);

        window.location.href = "mailto:" + email + "?subject=" + subject;
        subject = $('#subject').val("");
        return false;
    });
});
