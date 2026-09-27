const students = {

    "1234567890": {
        name: "John Mensah",
        school: "Accra Academy",
        programme: "General Arts",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Accra_Academy_Administration_Block.jpg/1280px-Accra_Academy_Administration_Block.jpg"
    },

    "2345678901": {
        name: "Ama Boateng",
        school: "Prempeh College",
        programme: "General Science",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80"
    },

    "3456789012": {
        name: "Kojo Asante",
        school: "Mfantsipim School",
        programme: "Business",
        image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Mfantsipim_School_main_entrance.jpg"
    },

    "4567890123": {
        name: "Abena Owusu",
        school: "Wesley Girls High School",
        programme: "General Arts",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=80"
    },

    "1503009010": {
        name: "Amoh Justice Adjei",
        school: "Dormaa Senior High",
        programme: "General Arts",
        image: "https://share.google/57ufoXxOHGzoiq0wT"
    }

};


const checkButton =
    document.getElementById("checkButton");


checkButton.addEventListener("click", function () {


    // Get index number

    const indexNumber =
        document.getElementById("indexNumber").value.trim();


    // Get date of birth

    const dateOfBirth =
        document.getElementById("dateOfBirth").value;


    // Check index number

    if (indexNumber === "") {

        alert("Please enter your index number.");

        return;
    }


    // Check date of birth

    if (dateOfBirth === "") {

        alert("Please enter your date of birth.");

        return;
    }


    // Find student

    const student =
        students[indexNumber];


    // Check whether index number exists

    if (!student) {

        alert(
            "Index number not found. Please check your index number."
        );

        return;
    }


    // Put information on result screen

    document.getElementById("studentName").textContent =
        student.name;


    document.getElementById("studentIndex").textContent =
        indexNumber;


    document.getElementById("studentDateOfBirth").textContent =
        dateOfBirth;


    document.getElementById("schoolName").textContent =
        student.school;


    document.getElementById("programme").textContent =
        student.programme;


    document.getElementById("schoolImage").src =
        student.image;



    // Hide first screen

    document.querySelector(".home-screen").style.display =
        "none";


    // Show result screen

    document.getElementById("resultScreen").style.display =
        "block";


    // Move to top of page

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});



function goBack() {


    // Hide result screen

    document.getElementById("resultScreen").style.display =
        "none";


    // Show first screen

    document.querySelector(".home-screen").style.display =
        "flex";


    // Clear index number

    document.getElementById("indexNumber").value = "";


    // Clear date of birth

    document.getElementById("dateOfBirth").value = "";


    // Move to top

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}