(function ($) {
  "use strict";

  let hidden = $(".default-hidden");
  let input = $(".validate-input .input100");
  var checkInput = $("input.checkInput");

  //text나 textarea에 값이 입력된 이후의 경우
  $(checkInput).change(function () {
    var result = $(checkInput).map(function (idx, elem) {
      console.log(elem.value);
      return elem.value;
    });

    if (all(result)) {
      var check = true;
      for (var i = 0; i < input.length; i++) {
        if (validate(input[i]) == false) {
          showValidate(input[i]);
          check = false;
        }
      }

      $(hidden).removeClass("default-hidden");
    }
  });

  function all(iterable) {
    for (var index = 0; index < iterable.length; index++) {
      if (!iterable[index]) return false;
    }
    return true;
  }

  //text나 textarea에 입력된 값이 바뀌는 경우
  //   var oldVal = "";
  //   $("input.checkInput").on(
  //     "propertychange change keyup paste input",
  //     function () {
  //       var currentVal = $(this).val();
  //       if (currentVal == oldVal) {
  //         return;
  //       }

  //       oldVal = currentVal;
  //       alert("changed!");
  //     }
  //   );

  /*==================================================================
    [ Validate on Submit ]*/
  $(".validate-form").on("submit", function () {
    var check = true;

    for (var i = 0; i < input.length; i++) {
      if (validate(input[i]) == false) {
        showValidate(input[i]);
        check = false;
      }
    }

    return check;
  });

  $(".validate-form .input100").each(function () {
    $(this).focus(function () {
      hideValidate(this);
    });
  });

  function validate(input) {
    if ($(input).attr("type") == "email" || $(input).attr("name") == "email") {
      if (
        $(input)
          .val()
          .trim()
          .match(
            /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
          ) == null
      ) {
        return false;
      }
    } else {
      if ($(input).val().trim() == "") {
        return false;
      }
    }
  }

  function showValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).addClass("alert-validate");
  }

  function hideValidate(input) {
    var thisAlert = $(input).parent();

    $(thisAlert).removeClass("alert-validate");
  }
})(jQuery);
