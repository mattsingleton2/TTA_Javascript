function validateForm() {
    let contactFormName = document.forms["form"]["name"].value;
    if (!contactFormName) {
        alert("You must enter a name.");
        return false;
    } else {
        return true;
    }
}