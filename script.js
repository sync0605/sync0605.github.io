
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onClick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

async function sendContact(ev) {
    ev.preventDefault();
    const senderEmail = document
        .getElementById('emailInput').value;
    const senderMessage = document
        .getElementById('messageInput').value;
    const senderNumber = document
        .getElementById('numberinput').value;
    const subject = document
        .getElementById('subjectinput').value;
    const senderName = document
        .getElementById('nameinput').value;

    const webhookBody = {
        embeds: [{
            title: 'Contact Form Submitted',
            fields: [
                {
                    name: 'Sender Name',
                    value: `> ${senderName}`
                },

                {
                    name: 'Sender Email',
                    value: `> ${senderEmail}`
                },
                {
                    name: 'Sender Number',
                    value: `> ${senderNumber}`
                },
                {
                    name: 'Sender Subject',
                    value: `> ${subject}`
                },
                {
                    name: 'Sender Message',
                    value: `> ${senderMessage}`
                }
            ]
        }],
    };
    const webhookUrl = 'https://discordapp.com/api/webhooks/1249108743644512256/QD4ewuStl2WUJFof3Ov5KEvGwUJWubXP6xw7qnXTVckHeGO4JlqqQLPfU7cp5OdXAmgj';
    const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookBody),
    });
    if (response.ok) {
        alert('I have received your message!');
    } else {
        alert('There was an error! Try again later!');
    }
}
