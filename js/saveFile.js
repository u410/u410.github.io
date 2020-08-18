function saveFile() {
  //https://stackoverflow.com/questions/57939882/saving-form-submitted-data-to-csv-file-using-javascript-jquery
  var formData = $("form").serializeArray();
  let csv = "";

  formData.slice(0, -3).forEach(function (item) {
    csv += item.value + ","; // concat form value on csv var and add ; to create columns (you can change to , if want)
  });

  var encodedUri = "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csv); // accept data as CSV
  //%EF%BB%BF means it accepts Hangul too
  var fileName = formData[0]['value'].replace('/ /g','')+" 응답.csv"
//   var fileName = "response.csv";

  // if you want to download
  var downloadLink = document.createElement("a");
  downloadLink.setAttribute("download", fileName);
  downloadLink.setAttribute("href", encodedUri);
  document.body.appendChild(downloadLink); // Required for FF
  downloadLink.click();
  downloadLink.remove();
}
