const courseData = [
    { id: 1, title: 'iOS Development' },
    { id: 2, title: 'React' },
    { id: 3, title: 'Intro to Python' },
    { id: 4, title: 'Advanced Python' },
    { id: 5, title: 'Advanced Cybersecurity Course' },
    { id: 6, title: 'ToT - Training of Trainers' },
    { id: 7, title: 'Blockchain' },
    { id: 8, title: 'DevOps' },
    { id: 9, title: 'Information Security Governance' },
];

const registrationCompleteMessage = 'რეგისტრაცია დასრულებულია';
const courseList = document.getElementById('card-list');

const createCardItem = (course) => {
    const { id, title } = course;

    const cardItem = document.createElement('div');
    cardItem.classList.add('card-item');
    cardItem.id = `card-${id}`;

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');
    cardImage.style.backgroundImage = `url(img/courses/image${id}.jpg)`;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    const cardInfo = document.createElement('p');
    cardInfo.classList.add('card-info');
    cardInfo.textContent = registrationCompleteMessage;

    const cardButton = document.createElement('a');
    cardButton.classList.add('card-button');
    cardButton.innerHTML = `<span class="arrow-icon"><img src="img/arrow.svg" alt="Arrow Icon"></span>კურსის დეტალები`;

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardInfo);
    cardItem.appendChild(cardImage);
    cardItem.appendChild(cardContent);
    cardItem.appendChild(cardButton);

    return cardItem;
};

const appendCardItemsToCourseList = (courseList, cardItems) => {
    courseList.append(...cardItems);
};

const cardItems = courseData.map(course => createCardItem(course));
appendCardItemsToCourseList(courseList, cardItems);
