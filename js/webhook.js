function sendDiscordMessage() {
  console.log("SEND: " + "start");

  var userEmail = document.getElementById('emailAddress').value;
  var userName = document.getElementById('name').value;
  var userYear = document.getElementById('year').value;

  var request = new XMLHttpRequest();
  request.open(
    "POST",
    "https://discord.com/api/webhooks/747697042859491368/-AW8wOtA7RosV4wiKIiVkWbAvpsO4qjRfIijdK8_3Vr7SkwI3Gz4aFzaS9XRZ1VrTPxN"
  );

  request.setRequestHeader("Content-type", "application/json");

  var params = {
    username: "GoogleForm",
    avatar_url: "",
    content: userYear + userName + "께서 응답을 제출하셨습니다.",
  };

  request.send(JSON.stringify(params));

  console.log("SEND: " + "sent");
}
