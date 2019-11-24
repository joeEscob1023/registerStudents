class Student {
  constructor(name, email, community) {
    this.name = name;
    this.email = email;
    this.community = community;
  }
}

class Bootcamp {
  constructor(name, level, students = []) {
    this.name = name;
    this.level = level;
    this.students = students;
  }

  registerStudent(studentToRegister) {
    if (studentToRegister.email) {
      this.students.push(studentToRegister);
      console.log(this.students);
      console.log(studentToRegister);
    }

    this.students.filter(student => {
      if (student.email === studentToRegister.email) {
        console.log("Email Already exists, try again");
        this.student.pop();
      }
    });
  }
}
