function adReplay() {
    let ad = document.querySelector(".sideWrapper");
    let copy = ad.cloneNode(true);
    ad.replaceWith(copy);
}

//  All of this is pretty much from Moodle: 
//     ISCG6420 Semester 2 2024
//     Exercise: Creating a Multi-page Form
//     https://moodle.unitec.ac.nz/mod/folder/view.php?id=1088851

const formPage1 = document.getElementById("form-page1");
const formPage2 = document.getElementById("form-page2");
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");
const formPage5 = document.getElementById("form-page5");

const progressBar = document.querySelector("progress")

const summaryDate = document.getElementById("summary-date");
const summaryAdults = document.getElementById("summary-adults");
const summaryChildren = document.getElementById("summary-children");
const summaryContactName = document.getElementById("summary-contact-name");
const summaryEmail = document.getElementById("summary-email");
const summaryTicket = document.getElementById("summary-ticket");
const summaryLocker = document.getElementById("summary-storage-locker");

const formData = document.getElementById("collected-data");

function showPage(pageNumber) {
    switch (pageNumber) {
        case 1:
            formPage1.style.display = 'block';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value= 20;
            break;
        case 2:
            formPage1.style.display = 'none';
            formPage2.style.display = 'block';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value= 40;
            break;
        case 3:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'block';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value= 60;
            break;
        case 4:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'block';
            formPage5.style.display = 'none';
            progressBar.value= 80;
            break;
        case 5:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'block';
            progressBar.value=100;
            break;
    }
}

function getFormData() {
    const pickedDate = document.getElementById('date-picker').value;
    const adultsNo = document.getElementById("adults").value;
    const childrenNo = document.getElementById("children").value;
    const cName = document.getElementById("contact-name").value;
    const emailAdd = document.getElementById("email-address").value;
    const ticket = document.getElementById("ticket-type").value;
    const locker = document.querySelector('input[name="extra-storage"]:checked').value;

    // const date = document.getElementById("date-picker").value;
    // const adults = Number(document.getElementById("adults").value || 0);
    // const children = Number(document.getElementById("children").value || 0);
    // const contactName = document.getElementById("contact-name").value;
    // const emailAddress = document.getElementById("email-address").value;
    // const ticketType = document.getElementById("ticket-type").value;

    return {
        date: pickedDate,
        adults: adultsNo,
        children: childrenNo,
        contactName: cName,
        emailAddress: emailAdd,
        ticketType: ticket,
        storageLocker: locker
    };
}

function updateSummary() {
    const data = getFormData();

    document.getElementById("summary-date").innerHTML = data.date;
    document.getElementById("summary-adults").innerHTML = data.adults;
    document.getElementById("summary-children").innerHTML = data.children;
    document.getElementById("summary-contact-name").innerHTML = data.contactName;
    document.getElementById("summary-email").innerHTML = data.emailAddress;
    document.getElementById("summary-ticket").innerHTML = data.ticketType;
    document.getElementById("summary-storage-locker").innerHTML = data.storageLocker;
}

function resetForm() {
    document.querySelectorAll("#form input, #form select").forEach(tick => {
        if (tick.type === "radio" || tick.type === "checkbox") {
            tick.checked = false;
        } else {
            tick.value ="";
        }
    })
}