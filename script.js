document.addEventListener("DOMContentLoaded", function () {

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
            name: "Amoh Justice",
            school: "Accra Academy",
            programme: "General Arts",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Accra_Academy_Administration_Block.jpg/1280px-Accra_Academy_Administration_Block.jpg"
        }

    };


    const homeScreen = document.getElementById("homeScreen");
    const loginScreen = document.getElementById("loginScreen");
    const resultScreen = document.getElementById("resultScreen");

    const startPlacementButton =
        document.getElementById("startPlacementButton");

    const checkButton =
        document.getElementById("checkButton");

    const backToServicesButton =
        document.getElementById("backToServicesButton");

    const anotherCheckButton =
        document.getElementById("anotherCheckButton");


    startPlacementButton.addEventListener("click", function () {

        homeScreen.style.display = "none";
        loginScreen.style.display = "flex";

        window.scrollTo(0, 0);

    });


    backToServicesButton.addEventListener("click", function () {

        loginScreen.style.display = "none";
        homeScreen.style.display = "flex";

        window.scrollTo(0, 0);

    });


    checkButton.addEventListener("click", function () {

        const indexNumber =
            document.getElementById("indexNumber").value.trim();

        const dateOfBirth =
            document.getElementById("dateOfBirth").value;


        if (indexNumber === "") {

            alert("Please enter your BECE index number.");

            return;
        }


        if (dateOfBirth === "") {

            alert("Please enter your date of birth.");

            return;
        }


        const student = students[indexNumber];


        if (!student) {

            alert(
                "Index number not found. Please check your index number."
            );

            return;
        }


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


        loginScreen.style.display = "none";
        resultScreen.style.display = "block";

        window.scrollTo(0, 0);

    });


    anotherCheckButton.addEventListener("click", function () {

        resultScreen.style.display = "none";
        loginScreen.style.display = "flex";

        document.getElementById("indexNumber").value = "";
        document.getElementById("dateOfBirth").value = "";

        window.scrollTo(0, 0);

    });

});