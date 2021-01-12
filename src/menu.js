let loadMenu = () => {
    let body = document.getElementById('content');

    let menu = document.createElement('div');
    menu.classList.add('menu');

    let head = document.createElement('h2');
    head.textContent = 'MENU';

    let menuContainer = document.createElement('div');
    menuContainer.id = 'menu-container';

    let menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');

    let chicken = document.createElement('img');
    chicken.setAttribute('alt', 'Spicy Chicken Pieces');
    chicken.setAttribute('src', 'chicken.jpeg');
    chicken.classList.add('item');

    let list1 = document.createElement('ul');
    list1.classList.add('details');

    let point1 = document.createElement('li');
    point1.textContent = 'Desc: Spicy Chicken Pieces (x6)';

    let point2 = document.createElement('li');
    point2.textContent = 'Price: #1500';

    let point3 = document.createElement('li');
    point3.textContent = 'Contents: Chicken, Spice';

    list1.appendChild(point1);
    list1.appendChild(point2);
    list1.appendChild(point3);

    menuItem1.appendChild(chicken);
    menuItem1.appendChild(list1);

    let menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');

    let burger = document.createElement('img');
    burger.setAttribute('alt', 'Delicious Burger');
    burger.setAttribute('src', 'burger.jpeg');
    burger.classList.add('item');

    let list2 = document.createElement('ul');
    list2.classList.add('details');

    let point4 = document.createElement('li');
    point4.textContent = 'Desc: Large Beef Burger (x1)';

    let point5 = document.createElement('li');
    point5.textContent = 'Price: #1200';

    let point6 = document.createElement('li');
    point6.textContent = 'Contents: Beef, Bread, Lettuce, Tomato, Cheese, Onion';

    list2.appendChild(point4);
    list2.appendChild(point5);
    list2.appendChild(point6);

    menuItem2.appendChild(burger);
    menuItem2.appendChild(list2);

    let menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');

    let salad = document.createElement('img');
    salad.setAttribute('alt', 'Healthy Salad');
    salad.setAttribute('src', 'salad.jpeg');
    salad.classList.add('item');

    let list3 = document.createElement('ul');
    list3.classList.add('details');

    let point7 = document.createElement('li');
    point7.textContent = 'Desc: Healthy Chicken/Vegan Salad';

    let point8 = document.createElement('li');
    point8.textContent = 'Price: #1000';

    let point9 = document.createElement('li');
    point9.textContent = 'Contents: Lettuce, Tomato, Olive Oil, Spinach, Baked Beans, Cream (optional)';

    list3.appendChild(point7);
    list3.appendChild(point8);
    list3.appendChild(point9);

    menuItem3.appendChild(salad);
    menuItem3.appendChild(list3);

    let menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');

    let shawarma = document.createElement('img');
    shawarma.setAttribute('alt', 'Chicken Shawarma');
    shawarma.setAttribute('src', 'shawarma.jpeg');
    shawarma.classList.add('item');

    let list4 = document.createElement('ul');
    list4.classList.add('details');

    let point10 = document.createElement('li');
    point10.textContent = 'Desc: Chicken Shawarma (x1)';

    let point11 = document.createElement('li');
    point11.textContent = 'Price: #1500';

    let point12 = document.createElement('li');
    point12.textContent = 'Contents: Chicken, Cream, Cabbage, Lettuce, Sausage';

    list4.appendChild(point10);
    list4.appendChild(point11);
    list4.appendChild(point12);

    menuItem4.appendChild(shawarma);
    menuItem4.appendChild(list4);

    menuContainer.appendChild(menuItem1);
    menuContainer.appendChild(menuItem2);
    menuContainer.appendChild(menuItem3);
    menuContainer.appendChild(menuItem4);

    menu.appendChild(head);
    menu.appendChild(menuContainer);
    
    body.appendChild(menu);
}

export default loadMenu;
