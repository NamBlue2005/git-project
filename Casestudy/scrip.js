let students = [];

function tinhDiem(diem1, diem2, diem3, diem4) {
    let tongDiem = diem1 + diem2 + diem3 + diem4;
    let diemTrungBinh = (tongDiem / 4).toFixed(2);
    return {
        tongDiem: tongDiem,
        diemTrungBinh: diemTrungBinh
    };
}

function xepLoaiHocLuc(diemTrungBinh) {
    if (diemTrungBinh >= 8.0) return "Giỏi";
    if (diemTrungBinh >= 6.5) return "Khá";
    if (diemTrungBinh >= 5.0) return "Trung Bình";
    return "Yếu";
}

function displayStudents(filteredStudents = students) {
    const studentTableBody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];
    studentTableBody.innerHTML = '';

    filteredStudents.forEach((student, index) => {
        const row = studentTableBody.insertRow();
        row.insertCell(0).innerText = index + 1; // STT
        row.insertCell(1).innerText = student.name;
        row.insertCell(2).innerText = student.year;
        row.insertCell(3).innerText = student.gender;
        row.insertCell(4).innerText = student.diem.giuHocKy1;
        row.insertCell(5).innerText = student.diem.hocKy1;
        row.insertCell(6).innerText = student.diem.giuHocKy2;
        row.insertCell(7).innerText = student.diem.hocKy2;
        row.insertCell(8).innerText = student.diem.tongDiem;
        row.insertCell(9).innerText = student.diem.diemTrungBinh;
        row.insertCell(10).innerText = student.hanhKiem;
        row.insertCell(11).innerText = student.hocLuc;

        const actionsCell = row.insertCell(12);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Xoá';
        deleteButton.classList.add('delete');
        deleteButton.onclick = () => deleteStudent(index);
        actionsCell.appendChild(deleteButton);
    });
}

function deleteStudent(index) {
    const confirmation = confirm("Bạn có chắc chắn muốn xóa học sinh này không?");
    if (confirmation) {
        students.splice(index, 1);
        displayStudents();
    }
}

document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('studentName').value;
    const year = document.getElementById('studentYear').value;
    const gender = document.getElementById('gender').value;
    const giuHocKy1 = parseFloat(document.getElementById('giuHocKy1').value);
    const hocKy1 = parseFloat(document.getElementById('hocKy1').value);
    const giuHocKy2 = parseFloat(document.getElementById('giuHocKy2').value);
    const hocKy2 = parseFloat(document.getElementById('hocKy2').value);
    const hanhKiem = document.getElementById('hanhKiem').value;

    const diem = tinhDiem(giuHocKy1, hocKy1, giuHocKy2, hocKy2);
    const hocLuc = xepLoaiHocLuc(diem.diemTrungBinh);

    const student = {
        name: name,
        year: year,
        gender: gender,
        diem: {
            giuHocKy1: giuHocKy1,
            hocKy1: hocKy1,
            giuHocKy2: giuHocKy2,
            hocKy2: hocKy2,
            tongDiem: diem.tongDiem,
            diemTrungBinh: diem.diemTrungBinh
        },
        hanhKiem: hanhKiem,
        hocLuc: hocLuc
    };

    students.push(student);
    displayStudents();

    // Reset form
    document.getElementById('addStudentForm').reset();
});

document.getElementById('searchInput').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm)
    );
    displayStudents(filteredStudents);
});
