$('#send').click(function () {

  const emails = [];

  $('.multipleInput-email span').each(function() {
    emails.push($(this).text())
  });

  if (!emails.length) {
    $('.container').append('<div class="alert alert-danger animated fadeIn" role="alert">Please enter email address!!</div>')
    setTimeout(function() {
      $('.alert').remove();
    }, 5000);
  } else {

    const formData = new FormData();

    formData.set('emails', emails.join());

    window.axios({
      method: 'post',
      url: 'api/invites',
      data: formData,
    }).then(function (response) {
      $('.container').append('<div class="alert alert-success animated fadeIn" role="alert">The invites was sent successfully!</div>')
      $('.multipleInput-container ul').empty();
      setTimeout(function() {
        $('.alert').remove();
      }, 5000);
    }).catch(function (error) {
      if (error.response.status === 422) {
        let errors = '';
        $.each(error.response.data.errors, function (key, item) {
          errors += item +'<br>';
        });
        $('.container').append('<div class="alert alert-danger animated fadeIn" role="alert">' + errors + '</div>')
        setTimeout(function() {
          $('.alert').remove();
        }, 5000);
      }
    });
  }
});
