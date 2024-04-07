(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "dSe6FWg1xc5l6_CxB",
    });
})();
  window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_wwbl7zm', 'template_7c38f2g', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}