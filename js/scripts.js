function beep(input) {
  let array = new Array(parseInt(input) + 1);
  for(let i = 0; i < array.length; i++) {
    const element = i.toString();
    if(element.includes("3")) {
      array[i] = "Won't you be my neighbor?";
    } else if(element.includes("2")) {
      array[i] = "Boop!"
    } else if(element.includes("1")) {
      array[i] = "Beep!";
    } else {
      array[i] = element;
    }
  }
  return array.join(", ")
}


$(document).ready(function() {
  $("#form1").submit(function(event) {
    event.preventDefault();
    const userName = $("#name").val();
    const userNum = $("#number").val();
    $("input[id=name]").val("");
    $("input[id=number]").val("");
    const output = beep(userNum);
    $("#humName").text(userName);
    $("#speMes").text(output);
    $(".compute").show();
    $("form1").hide();
  });
  $("#submitTwo").click(function() {
    $("form").show();
    $(".compute").hide();
  })
});