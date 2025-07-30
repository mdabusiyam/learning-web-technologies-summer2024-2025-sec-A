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

function validateDOB()
{
    const dd = parseInt(document.getElementById("dd").value.trim());
    const mm = parseInt(document.getElementById("mm").value.trim());
    const yyyy = parseInt(document.getElementById("yyyy").value.trim());

    if(dd < 1 || dd > 31)
    {
        alert("Day must be between 1 and 31");
    }

    if(mm < 1 || mm > 12)
    {
        alert("Month must be between 1 and 12");
    }

    if(yyyy < 1900 || yyyy > 2007)
    {
        alert("Year must be between 1900 and 2007");
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