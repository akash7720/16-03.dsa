

const students = [
    { name: 'Alice', age: 20, grade: 'A', subjects: ['Math', 'Physics', 'Chemistry'] },
    { name: 'Bob', age: 21, grade: 'B', subjects: ['Math', 'Biology', 'History'] },
    { name: 'Charlie', age: 19, grade: 'C', subjects: ['Physics', 'Chemistry', 'Literature'] },
    { name: 'David', age: 22, grade: 'A', subjects: ['Math', 'Physics', 'Literature'] },
    { name: 'Eva', age: 18, grade: 'B', subjects: ['Math', 'Chemistry', 'History'] }
  ];
  
//   function filterArray(students) {
//     var filteredStudents = students.filter(oneStudent => oneStudent.age >= 20 && oneStudent.subjects.includes('Physics'));
//     return filteredStudents;
// }

// console.log(filterArray(students));

function filterArray(students) {
 
    for(var i=0 ; i<students.length;i++){
        if(students.filter(oneStudent => oneStudent.age > 20)){
                console.log(students)
        }
    }
        
}
console.log(filterArray(students));


// const filterArray=students.filter(onestudents=>onestudents.age>20 && onestudents.subjects.includes('Physics'));

// console.log(filterArray)

// function filterArray(students){
     
//     for(var i=0 ;i<students.lenght; i++){
//            if(students.filter(onestudents=>onestudents.age>20 && onestudents.subjects.includes('Physics'))){
//             console.log(filterArray)
//            }
//     }
// }
// console.log(filterArray(students));





 
