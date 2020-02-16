function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}
(function ($) {
  $.fn.multipleInput = function () {
    return this.each(function () {
      // list of email addresses as unordered list
      $list = $('<ul/>');
      // input
      const $input = $('<input type="email" id="email_search" class="email_search multiemail" autocomplete="off"/>').keyup(function (event) {
        if (event.which == 13 || event.which == 32 || event.which == 188) {
          if (event.which==188) {
            var val = $(this).val().slice(0, -1);// remove space/comma from value
          }
          else {
            var val = $(this).val(); // key press is space or comma
          }
          if (validateEmail(val)) {
            // append to list of emails with remove button
            $list.append($('<li class="multipleInput-email"><span>' + val + '</span></li>')
              .append($('<a href="#" class="multipleInput-close" title="Remove"><i class="far fa-times-circle"></i></a>')
                .click(function (e) {
                  $(this).parent().remove();
                  e.preventDefault();
                })
              )
            );
            $(this).attr('placeholder', '');
            // empty input
            $(this).val('');
          }
          else{
            $('.error-msg').show().delay(5000).fadeOut();
          }
        }
      });
      // container div
      const $container = $('<div class="multipleInput-container" />').click(function() {
        $input.focus();
      });
      // insert elements into DOM
      $container.append($list).append($input).insertAfter($(this));
      return $(this).hide();
    });
  };
  $('#cancel').click(function () {
    $list.empty();
    $('#email_search').val('');
  });
})( jQuery );
