
//////////Given From Class Projects
var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
    );
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
    });

    ////////////
    
    ///Jquery function to load on DOM and to check for the right answer.
    $(document).ready(function() {
        $('#submit-quiz').click(function() {
          $('.feedback').empty(); 
          
        
          let answers = {
            q1: 'c', 
            q2: 'c' , 
            q3:'c',
            q4:'c',
            q5:'b',
            q6:'c',
            q7:'c',
            q8:'c',
            q9:'c',
            q10:'c'
          };
          
    
          for (let question in answers) {
            let selectedAnswer = $('#' + question).val();
            if (selectedAnswer === answers[question]) {
              $('.feedback-' + question).text('Correct').addClass('text-success');
            } else {
              $('.feedback-' + question).text('Incorrect').addClass('text-danger');
            }
          }
        });
      });



   

    