let StudentList = new Map([
    ['Sri',  90],
    ['Piyu', 60],
    ['Ram',  70]
  ]);
  console.log("List Of Students");
  console.log(StudentList);
  console.log("---------------------------");
  for (let name of StudentList.keys()) {
    console.log("Student Names");
    console.log(name); 
  }
  console.log("---------------------------");

  for (let Marks of StudentList.values()) {
    console.log("Student Marks");
    console.log(Marks); 
  }
  console.log("---------------------------");
  