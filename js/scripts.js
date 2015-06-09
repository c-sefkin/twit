var getTimeStamp = function() {
  var newDate = Date();
  newDate = formatDate(newDate);
  return newDate;
}

var formatDate = function(input) {
  formattedDate = [];
  splitDate = input;
  splitDate = splitDate.split(" ");
  for (var i = 0; i <= splitDate.length - 1; i++) {
    if (i === 1 || i === 2 || i === 3 || i === 4 || i === 6) {
      formattedDate.push(splitDate[i]);
    }
  }
  formattedDate = formattedDate.join(' ');
  return formattedDate;
}
