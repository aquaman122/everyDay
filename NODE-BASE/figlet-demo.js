let figlet = require("figlet");

figlet("If you have a time today we go to the cafe !!", (err, data) => {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});