// from data.js
let tableData = data;

//datetime: "1/1/2010",
//city: "benton",
//state: "ar",
//country: "us",
//shape: "circle",
//durationMinutes: "5 mins.",
//comments: "4 bright green circles high in the sky going in c..

// YOUR CODE HERE!
//get reference to the table body
let tbody = d3.select("tbody");
//loop through the data and console.log each ufo report object
//data.forEach(function (ufoReport) {
//    console.log(ufoReport);
//    let row = tbody.append("tr")
//    row.append("td").text(ufoReport.datetime)
//    row.append("td").text(ufoReport.city)
//    row.append("td").text(ufoReport.state)
//    row.append("td").text(ufoReport.country)
//    row.append("td").text(ufoReport.shape)
//    row.append("td").text(ufoReport.durationMinutes)
//    row.append("td").text(ufoReport.comments)
//});
data.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

