let initialLoad = () => {
    let body = document.getElementById('content');

    let header = document.createElement('div');
    header.classList.add('header');

    let headline = document.createElement('h1');
    headline.textContent = "Jhay's Treats";

    let slogan = document.createElement('p');
    slogan.classList.add('slogan');
    slogan.textContent = 'Catering to every craving...';

    let menuTab = document.createElement('button');
    menuTab.classList.add('menuTab');
    menuTab.textContent = 'Menu';

    let contactTab = document.createElement('button');
    contactTab.classList.add('contactTab');
    contactTab.textContent = 'Contact Us';

    header.appendChild(headline);
    header.appendChild(slogan);
    header.appendChild(menuTab);
    header.appendChild(contactTab);

    let image = document.createElement('div');
    image.classList.add('image');

    let banner = document.createElement('img');
    banner.classList.add('banner');
    banner.setAttribute('alt', 'Food Banner');
    banner.setAttribute('src', 'food.jpg');

    image.appendChild(banner);

    let summary = document.createElement('p');
    summary.id = 'summary';
    summary.textContent = `Feeling Hungry? Peckish? Just bored? Head on over to Jhay's Treats. We cater to every possible craving. From fried to boiled to grilled to even edibles. We're equipped for every eventuality. We await your request.`;

    body.appendChild(header);
    body.appendChild(image);
    body.appendChild(summary);
}

export default initialLoad
