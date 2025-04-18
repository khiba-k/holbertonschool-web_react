const $ = require("jquery");
const _ = require("lodash");

$(document).ready(function () {
  $("body").append("<p>Holberton Dashboard</p>");
  $("body").append("<p>Dashboard data for the students</p>");
  $("body").append("<button>Click here to get started</button>");
  $("body").append("<p id='count'></p>");
  $("body").append("Copyright - Holberton School");

  function updateCounter() {
    const count = $("#count").text();
    const newCount = count ? parseInt(count) + 1 : 1;
    $("#count").text(`${newCount} clicks on the button`);
  }
  $("button").on("click", _.debounce(updateCounter, 500));
});
