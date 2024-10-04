function validateData() {
    let isValid = true;

    let fields = [
        { id: 'name', errorId: 'nameError' },
        { id: 'email', errorId: 'emailError' },
        { id: 'phone', errorId: 'phoneError' },
        { id: 'address', errorId: 'addressError' },
        { id: 'degree', errorId: 'degreeError' },
        { id: 'institution', errorId: 'institutionError' },
        { id: 'graduationYear', errorId: 'gradYearError' },
        { id: 'skills', errorId: 'skillsError' }
    ];

    fields.forEach(field => {
        let input = document.getElementById(field.id);
        let error = document.getElementById(field.errorId);
        if (input.value.trim() === "") {
            error.style.display = 'inline';
            isValid = false;
        } else {
            error.style.display = 'none';
        }
    });

    return isValid;
}

function generateResume() {
    if (!validateData()) {
        return;
    }

    document.getElementById("resumeTemplate").style.display = 'block';

    document.getElementById("displayName").innerText = document.getElementById("name").value;
    document.getElementById("displayEmail").innerText = document.getElementById("email").value;
    document.getElementById("displayPhone").innerText = document.getElementById("phone").value;
    document.getElementById("displayAddress").innerText = document.getElementById("address").value;
    document.getElementById("displayDegree").innerText = document.getElementById("degree").value;
    document.getElementById("displayInstitution").innerText = document.getElementById("institution").value;
    document.getElementById("displayGradYear").innerText = document.getElementById("graduationYear").value;
    document.getElementById("displaySkills").innerText = document.getElementById("skills").value;

    let photoInput = document.getElementById("photo");
    let profilePic = document.getElementById("profilePic");
    let file = photoInput.files[0];
    if (file) {
        let reader = new FileReader();
        reader.onload = function(event) {
            profilePic.src = event.target.result;
        };
        reader.readAsDataURL(file);
    } else {
        profilePic.src = '';
    }
}
