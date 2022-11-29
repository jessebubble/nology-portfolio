function clearMessages() {
    if (window.sessionStorage.getItem('arrays')) {
        window.sessionStorage.removeItem('arrays');
    }
    renderContactForm();
}
function submitMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const contactForm = { name, email, message }; 

    let contactFormArrays = [];
    if (window.sessionStorage.getItem('arrays')) {
        contactFormArrays = 
            JSON.parse(window.sessionStorage.getItem('arrays'));
    }
    contactFormArrays.push(contactForm);
    window.sessionStorage.setItem
        ('arrays',
        JSON.stringify(contactFormArrays));

    renderContactForm();
}
function renderContactForm() {
    let contactFormArrays = [];

    if (window.sessionStorage.getItem('arrays')) {
        contactFormArrays = 
            JSON.parse(window.sessionStorage.getItem('arrays'));
    }

    let listItems = [];
    for (let i = 0; i < contactFormArrays.length; i++) {
        let listItem = "";
        const contactFormArray = contactFormArrays[i];
        listItem += `<dt>${contactFormArray.name}</dt>`;
        listItem += `<dt>${contactFormArray.email}</dt>`;
        listItem += `<dd>${contactFormArray.message}</dd>`;
        listItem += `<br />`;
        listItems.push(listItem);
    }

    let descriptionList = document.getElementById('contactFormArrays');
    descriptionList.innerHTML = listItems.join('');
}

renderContactForm();