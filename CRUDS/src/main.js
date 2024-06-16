const creatStudentForm = document.getElementById("creat_student_form");
const student_data_list = document.getElementById("student_data_list");
const mgs = document.querySelector(".mgs");


const getAllStudents = () => {

    const students = getDataLds("students");
    let dataList = "";
    let crunt = 1;
    if (students) {
        students.forEach((element, index) => {
            dataList += `
                                                   <tr>
                                            <td>${crunt++}</td>
                                            <td>${element.name}</td>
                                            <td>
                                                <img src="${element.photo}" alt="">
                                            </td>
                                            <td>${element.mobile}</td>
                                            <td>${element.email}</td>
                                            <td>${element.location}</td>
                                            <td>
                                                <button class=" btn btn-sm btn-info" data-bs-toggle="modal" data-bs-target="#show_student">
                                                    <i class="fa-regular fa-eye"></i>
                                                </button>
                                                <button class=" btn btn-sm btn-warning">
                                                    <i class="fa-solid fa-pen-to-square"></i>
                                                </button>
                                                <button class=" btn btn-sm btn-danger">
                                                    <i class="fa-solid fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
           `
        });
    }else{
        dataList=`
        <tr>
        <th>Not data found </th>
        </tr>
        `
    };

    student_data_list.innerHTML= dataList;
}

getAllStudents();

creatStudentForm.onsubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { name, photo, email, mobile, location } = Object.fromEntries(formData);

    if (!name || !photo || !email || !mobile || !location) {
        mgs.innerHTML = careatMgs("All fields are required ");
    } else if (!isEmail(email)) {
        mgs.innerHTML = careatMgs("Invlid email")
    } else if (!isMobile(mobile)) {
        mgs.innerHTML = careatMgs("Invlid Mobile Numbal")
    } else {
        setDataLds("students", {
            id: generateUniqueId(),
            time: Date.now(),
            name,
            photo,
            email,
            mobile,
            location
        });
        mgs.innerHTML = careatMgs("Creat Students Done", "success");
        e.target.reset();
        getAllStudents();
    }
}