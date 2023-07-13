const fs = require('fs');

const students = [];

const readFile = () => {
  fs.readFile('./student_data.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }

    const lines = data.split('\n');

    for (const line of lines) {
      const student = line.split(',');
      
      const name = student[0];
      const cgpa = Number(student[1]);

      if (name.includes('Ma') && cgpa > 7) {
        students.push(student);
      }
    }
    console.log(students);
  });
};

readFile();
