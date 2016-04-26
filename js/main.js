// =========================  Quiz Panel animation  ============================
$(function() {
  var hidebutton = $('#nextquestion').hide();
  var loading = $('#loadbar').hide();
  $(document)
    .ajaxStart(function() {
      loading.show();
    }).ajaxStop(function() {
      loading.hide();
    });

  $("label.btn").on('click', function() {
    var choice = $(this).find('input:radio').val();
    $('#loadbar').show();
    $('#quiz').fadeOut();
    setTimeout(function() {
      $("#answer").html($(this).checking(choice));
      $('#quiz').show();
      $('#loadbar').fadeOut();
      /* something else */
    }, 1500);
  });

  $ans = 3;


  $.fn.checking = function(ck) {
    if (ck != $ans)
      return 'INCORRECT';
    else

      $(".progress-quiz").css({
      "width": "+20%"
    });
    $('#nextquestion').show();
    return 'CORRECT';
  };
});
// ======================== /Quiz Panel animation  ============================


// Ce qui suit : Test en vue de changer les questions lorsque la réponse est correcte 

var questionstestquiz = ['Two is correct', 'Three is correct', 'One is correct', 'Three is correct'];
var reponsestestquiz = ['2', '3', '1', '3']
for (var i = 0; i < questionstestquiz.length; i += 1);
