const $ = require("jquery");
const _ = require("lodash");

$(document).ready(function () {
  $("head").append("<link rel='stylesheet' href='../css/main.css' />");

  $("body").append(
    '<div id="logo" style="width: 200px; height: 200px;"></div>'
  );
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button>Click here to get started</button>");
  $("body").append("<p id='count'></p>");
  $("body").append("<p>Copyright - Holberton School</p>");

  function updateCounter() {
    const count = $("#count").text();
    const newCount = count ? parseInt(count) + 1 : 1;
    $("#count").text(`${newCount} clicks on the button`);
  }
  $("button").on("click", _.debounce(updateCounter, 500));
});
