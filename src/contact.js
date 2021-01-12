let loadContact = () => {
    let body = document.getElementById('content');

    let container = document.createElement('div');
    container.classList.add('contact');

    let head = document.createElement('h1');
    head.textContent = 'Contact Us';

    let contact = document.createElement('div');
    contact.classList.add('contacts');

    let list = document.createElement('ul');

    let item1 = document.createElement('li');
    item1.textContent = 'Phone: 08173312200, 08055273953';

    let item2 = document.createElement('li');
    let link1 = document.createElement('a');
    link1.setAttribute('href', 'https://facebook.com');
    link1.textContent = 'Facebook';
    item2.appendChild(link1);

    let item3 = document.createElement('li');
    let link2 = document.createElement('a');
    link2.setAttribute('href', 'https://twitter.com');
    link2.textContent = 'Twitter';
    item3.appendChild(link2);

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);

    contact.appendChild(list);

    container.appendChild(head);
    container.appendChild(contact);

    body.appendChild(container);
}

export default loadContact;
