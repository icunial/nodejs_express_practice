/* const course = require("./course.json");

console.log(course);
console.log(course.title);
console.log(course.topics); */

// JSON.parse()

let infoCourse = {
  title: "Title 1",
  numViews: 1000,
  numLikes: 500,
  topics: ["Javascript", "NodeJs"],
  isPublic: true,
};

let infoCourseJSON = JSON.stringify(infoCourse);
console.log(infoCourseJSON);
console.log(typeof infoCourseJSON);

let infoCourseOBJ = JSON.parse(infoCourseJSON);
console.log(infoCourseOBJ);
console.log(typeof infoCourseOBJ);
