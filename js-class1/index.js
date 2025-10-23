// window.alert('hello from external JS');
// alert('hello from external JS without window object');
console.log('hello from console JS');
document.writeln('hello world'+'<br>');


let student_id = 123;
let student_cgpa = 2.85;
let student_name = "Ami";
let eS = ""
let b="12345"

document.writeln('Student ID:'+student_id+'<br>')
document.writeln('Student CGPA:'+student_cgpa+'<br>')
document.writeln('Student Name:'+student_name+'<br>')


console.log('Student ID:'+student_id)
console.log('Student CGPA:'+student_cgpa)
console.log('Student Name:'+student_name)


document.writeln('<p style="color:red">'+student_id+'</p>')


//type casting

//float to integer
let cgpa = parseInt(student_cgpa);
document.writeln(typeof(cgpa));
document.writeln(cgpa);

//int to float
let id= parseFloat(student_id);
document.writeln(typeof(id));
document.writeln(cgpa.toFixed(3));

//string to int
let bint= parseInt(b);
document.writeln(typeof(bint));
document.writeln(bint);
document.writeln(typeof(bint));