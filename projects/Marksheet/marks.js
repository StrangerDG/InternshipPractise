// script.js
document.getElementById('generateButton').addEventListener('click', () => {
    const name = document.getElementById('name').value.trim();
    const rollNo = document.getElementById('rollNo').value.trim();

    // Subjects and marks
    const subjects = [
        { name: document.getElementById('subject1').value.trim(), marks: parseFloat(document.getElementById('marks1').value) },
        { name: document.getElementById('subject2').value.trim(), marks: parseFloat(document.getElementById('marks2').value) },
        { name: document.getElementById('subject3').value.trim(), marks: parseFloat(document.getElementById('marks3').value) },
        { name: document.getElementById('subject4').value.trim(), marks: parseFloat(document.getElementById('marks4').value) },
        { name: document.getElementById('subject5').value.trim(), marks: parseFloat(document.getElementById('marks5').value) },
    ];

    const totalMarksPerSubject = parseFloat(document.getElementById('totalMarks').value);

    // Check for valid inputs
    if (!name || !rollNo || subjects.some(subject => !subject.name || isNaN(subject.marks)) || isNaN(totalMarksPerSubject)) {
        alert('Please fill in all fields correctly.');
        return;
    }

    // Calculate total marks and percentage
    const totalMarksObtained = subjects.reduce((total, subject) => total + subject.marks, 0);
    const totalMarks = totalMarksPerSubject * subjects.length;  // 5 subjects
    const percentage = (totalMarksObtained / totalMarks) * 100;

    // Determine grade
    let grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A';
    } else if (percentage >= 70) {
        grade = 'B';
    } else if (percentage >= 60) {
        grade = 'C';
    } else if (percentage >= 50) {
        grade = 'D';
    } else {
        grade = 'F';
    }

    // Display result
    const resultDiv = document.getElementById('result');
    let subjectsHtml = '';
    subjects.forEach(subject => {
        subjectsHtml += `<p><strong>${subject.name}:</strong> ${subject.marks} / ${totalMarksPerSubject}</p>`;
    });

    resultDiv.innerHTML = `
        <h2>Marksheet</h2>
        <p><strong>Student Name:</strong> ${name}</p>
        <p><strong>Roll Number:</strong> ${rollNo}</p>
        ${subjectsHtml}
        <p><strong>Total Marks Obtained:</strong> ${totalMarksObtained} / ${totalMarks}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});
