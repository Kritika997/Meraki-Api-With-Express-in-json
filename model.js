const fs = require("fs");
const axios =  require("axios");
// axios.get("http://saral.navgurukul.org/api/courses").then(response=>{
//     const saral_courses = (response.data);
//     fs.writeFile("saral_course.json",JSON.stringify(saral_courses,null,"\t"),(err)=>{
//         if(err) throw err;
//     });
// });
var Mydata = fs.readFileSync("saral_course.json","utf8");
var raw_data = JSON.parse(Mydata);
// console.log(raw_data)
module.exports = raw_data;

