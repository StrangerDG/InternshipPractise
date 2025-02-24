
// console.log(student);
const student = [
    {
      name: 'Dipak',
      section: 'D',
      rollNo: 1,
      subject: {
        majorSubject: "Math",
        compulsorySubuject: "English"
      }
    },
    {
      name: 'ashok',
      section: 'D',
      rollNo: 1
    }
    
  ];
  
  student.forEach(ok => {
    console.log(
      `Full Name: ${ok.name}, Section Name: ${ok.section}, Roll No: ${ok.rollNo}, ` +
      `Compulsory Subject: ${ok.subject?.compulsorySubuject || 'Not Available' } `  +  
      `Major Subject: ${ok.subject?.majorSubject || 'Not Available' }`
    );
  });
  
  
