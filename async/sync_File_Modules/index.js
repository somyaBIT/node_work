// fetching file modules

const fs = require("fs");
// const { mkdir } = require("node:fs");

// ------SYNCHRONOUS-------

//  create a folder name Somya 
// fs.mkdirSync("Somya");

// create a document file,if not exist inside folder somya
// fs.writeFileSync("somya/document.txt","hello,welcome to my channel");

// if file exist then data overwright
// fs.writeFileSync("somya/document.txt","hi,welcome to my channel");

// add lines to a document.txt
// fs.appendFileSync("somya/document.txt", " I'm Somya ");

// read the data
// const buff_read = fs.readFileSync("somya/document.txt","utf8");
// here u get buffer_data
// console.log(buff_read);
// covert buffer_data to string
//  const string_read = buff_read.toString();
// console.log(string_read);

// read the data,utf8 covert buffer into string
// const read = fs.readFileSync("somya/document.txt","utf8");
// here u get string_data
// console.log(read);

// rename the filenme
// fs.renameSync("somya/document.txt","somya/mydocument.txt");

// delete file
// fs.unlinkSync("somya/mydocument.txt");

// delete the folder
// fs.rmdirSync("somya");


// ----------ASYNCHRONOUS-------

// fs.mkdir("singh",(err) => {

//     console.log("folder created ");
// });

// fs.writeFile("singh/doc.txt","asynchronous challenge",(err) => {
//     console.log("file created");
// })

// fs.writeFile("singh/doc.txt","asynchronous challenge overwright or not",(err) => {
//     console.log("file overwrite");
// })

// fs.appendFile("singh/doc.txt","  it accepts multitasking request ",(err) => {
//     console.log("add some lines");
// })

// fs.readFile("singh/doc.txt","utf-8",(err,data) => {
//     console.log(data);
//     console.log("data read");
// })
// console.log("which data read first ? ");

// fs.rename('singh/doc.txt',"singh/mydoc.txt",(err)=>{
//     console.log("remane done");
// })

// fs.unlink("singh/mydoc.txt",(err)=>{
//     console.log("delete file");
// })

// fs.rmdir('singh',(err) => {

//     console.log("folder delete");
// })