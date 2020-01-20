$(document).ready(function() {
  $("table").css("height", $("table").css("width"));
  $(".chooser")
    .mouseenter(function() {
      if (this.id === "pen" ^ colmode) {
        document.getElementById("woosh").play();
      }
      $(this).css("width", "80px");
      $(this).css("height", "80px");
      $(this).css("background-size", "80px 80px");
    })
    .mouseleave(function() {
      switch (this.id) {
        case "pen":
          if (colmode) {
            $(this).css("width", "80px");
            $(this).css("height", "80px");
            $(this).css("background-size", "80px 80px");
          } else {
            document.getElementById("woosh").play();
            $(this).css("width", "70px");
            $(this).css("height", "70px");
            $(this).css("background-size", "70px 70px");
          }
          break;
        default:
          if (colmode) {
            document.getElementById("woosh").play();
            $(this).css("width", "70px");
            $(this).css("height", "70px");
            $(this).css("background-size", "70px 70px");
          } else {
            $(this).css("width", "80px");
            $(this).css("height", "80px");
            $(this).css("background-size", "80px 80px");
          }
      }
    });
  $("#clearall").click(clear);
});
var colmode = true;

function styl(which) {
  if (which) {
    colmode = true;
    document.getElementById("blop").play();
    $("#pen").css("width", "80px");
    $("#pen").css("height", "80px");
    $("#pen").css("background-size", "80px 80px");
    $("#eraser").css("width", "70px");
    $("#eraser").css("height", "70px");
    $("#eraser").css("background-size", "70px 70px");
  } else {
    colmode = false;
    document.getElementById("blop").play();
    $("#eraser").css("width", "80px");
    $("#eraser").css("height", "80px");
    $("#eraser").css("background-size", "80px 80px");
    $("#pen").css("width", "70px");
    $("#pen").css("height", "70px");
    $("#pen").css("background-size", "70px 70px");
  }
}

function changecol(boxnum) {
  document.getElementById("woosh").play();
  if (colmode) {
    $("#" + String(boxnum)).css("background-color", $("#color").val());
  } else {
    $("#" + String(boxnum)).css("background-color", "white");
  }
}

function clear() {
  document.getElementById("blop").play();
  $("td").css("background-color", "white");
}
