class Student { 
  constructor (firstName, lastName, dateOfBirth, grade, attendance){ 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.dateOfBirth = dateOfBirth, 
    this.grade = grade;  
    this.attendance = new Array(25); 
  } 
   
  calculateAge() { 
    console.log(new Date().getFullYear() - this.dateOfBirth); 
  } 
   
  calculateAverageScore(){ 
    let averageScore = (this.grade.reduce((sum, mark) => sum + mark, 0)) / this.grade.length; 
    return averageScore 
  } 
  
  present(){ 
    const index = this.attendance.findIndex(el => el === undefined); 
    if (index !== -1) { 
      this.attendance[index] = true; 
    } else { 
      console.log('Місця для запису вже закінчились'); 
    } 
  }   
   
  absent(){ 
    const index = this.attendance.findIndex(el => el === undefined); 
    if (index !== -1) { 
      this.attendance[index] = false; 
    } else { 
      console.log('Місця для запису вже закінчились'); 
    } 
  } 
  
  calculateAverageAttendance () { 
  const totalAttendance = this.attendance.filter(element => element !== false && element !== undefined).length;
    let resultOfTotalAttendance = totalAttendance / this.attendance.length; 
    return resultOfTotalAttendance;
  } 
  
  summary() {
    const attendance = this.calculateAverageAttendance();
    const score = this.calculateAverageScore();
    if (attendance >= 0.9 && score >= 90) {
      console.log('Дуже добре!');
    } else if (attendance >= 0.9 || score >= 90) {
      console.log('Не погано');
    } else {
      console.log('Дуже погано!');
    }
  }
} 

let studentOne = new Student('Hermann', 'Belinskii', 1994, [90, 90, 90])

function callMethodMultipleTimes(student, method, times) {
  for (let i = 0; i <= times; i++) {
    student[method]();
  }
}

callMethodMultipleTimes(studentOne, 'absent', 25);
console.log(studentOne)
studentOne.calculateAverageScore()
studentOne.summary()
studentOne.calculateAge()
console.log(studentOne.calculateAverageScore())


let studentTwo = new Student('Alex', 'Fog', 1992, [100, 100, 90])
callMethodMultipleTimes(studentTwo, 'present', 25);
studentTwo.present()
console.log(studentTwo)
studentTwo.calculateAverageScore()
studentTwo.summary()
studentTwo.calculateAge()
console.log(studentTwo.calculateAverageScore())

let studentThree = new Student('Olga', 'Love', 1992, [20, 20, 20])
callMethodMultipleTimes(studentThree, 'absent', 25);
console.log(studentThree)
studentThree.calculateAverageScore()
studentThree.calculateAge()
studentThree.summary()
console.log(studentThree.calculateAverageScore())