const fs = require("fs");

//create directory

fs.writeFile(
  "employees.json",
  '[{ "name": "Employee 1 Name", "salary": 2000 }]',
  "utf-8",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("employees.json created successfully");
  }
);

// read

fs.readFile("./employees.json", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(JSON.stringify(data));
});

// update or replace

fs.writeFile(
  "employees.json",
  '[{ "name": "Employee 2 Name", "salary": 3000 }]',
  "utf-8",
  (err) => {
    if (err) {
      console.log(err);
    }
    console.log("employees.json replaced successfully");
  }
);

// delete

fs.unlink("./employees.json", (err) => {
  if (err) {
    console.log(err);
  }
  console.log("File deleted successfully");
});
