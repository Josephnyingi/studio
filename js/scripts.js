$(document).ready(function(){
  $("#development-image").click(function(){
  $("#development-image").slideDown('1500').hide('1000');
  $("#development").show('1500');
});
$("#development").click(function(){
  $("#development").slideUp('1500');
  $("#development-image").slideDown('1500');
});
});
$(document).ready(function(){
  $("#design-image").click(function(){
  $("#design-image").slideDown('1500').hide('1000');
  $("#design").show('1500');
});
$("#design").click(function(){
  $("#design").slideUp('1500');
  $("#design-image").slideDown('1500');
});
});
$(document).ready(function(){
  $("#product-image").click(function(){
  $("#product-image").slideDown('1500').hide('1000');
  $("#product").show('1500');
});
$("#product").click(function(){
  $("#product").slideUp('1500');
  $("#product-image").slideDown('1500');
});
});
$("button").onClick(function () {
        $("form").each(function () {
          this.reset();
        });
        $(".card").hover(function () {
          $("this").children(".card-1").fadeToggle(1000, "linear")
        });
      });

    $("#submit").click(function (event) {
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      if (name === '' || email === '' || message === '') {
        alert('Please fill in the required data');
      } else {
        alert(" Hello " + name + " We have received your message.Thank you for reaching out to us")
        event.preventDefault();
      };
    });

      $("button").onClick(function () {
        $("form").each(function () {
          this.reset();
        });
        $(".card").hover(function () {
          $("this").children(".card-1").fadeToggle(1000, "linear")
        });
      });

      function functionName() {
        var delani=document.getElementById("web").value;
        alert(delani+  " we have recorded your message. pleasure");

    };
    function submit(name) {
        var joe = document.getElementById("web").value;
        if (web === " ") {
          alert("dvasbfbvd");
        }
        else{
          alert(name + "afafdadda");
        }
      }