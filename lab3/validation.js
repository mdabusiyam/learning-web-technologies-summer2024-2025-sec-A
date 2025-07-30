console.log("JS Loaded");

function validateName()
{
    const name = document.getElementById("name").ariaValueMax.trim();
    if(name == "")
    {
        alert("Name cannot be empty");
    }
}

function validateEmail()
{
    const email = document.getElementById("email").ariaValueMax.trim();
    if(email == "")
    {
        alert("Email cannot be empty");
    }
}

function validateGender()
{
    const checked1 = document.querySelectorAll('input[type="radio"]:checked');
    if(checked1.length === 0)
    {
        alert("Select at least one");
    }
}

function validateDegree()
{
    const checked2 = document.querySelectorAll('input[type="checkbox"]:checked');
    if(checked2.length === 0)
    {
        alert("Select at least one");
    }
}

function validateBlood()
{
    const blood = document.getElementById("blood").ariaValueMax.trim();
    if(blood == "")
    {
        alert("Select at least one");
    }
}

function validatePic()
{
    const uid = document.getElementById("uid").value;
    const pic = document.getElementById("pic").value;

    if(uid === "" || parseInt(uid) <= 0)
    {
        alert("User ID must be a positive number");
    }

    if(pic === "")
    {
        alert("Profile Picture must be uploaded");
    }
}