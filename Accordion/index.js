// const data = [
//     {
//         id: 1,
//         title: 'Javscript',
//         body: "I can write Javascript"
//     },
//     {
//         id: 2,
//         title: 'Typescript',
//         body: "I can write Typescript"
//     },
//     {
//         id: 3,
//         title: 'React',
//         body: "I can write React"
//     }
// ];

// const documentFrag = document.createDocumentFragment()
// const accordionContainer = document.querySelector('.accordion');

// const items = data.map((item) => {


//     const divEl = document.createElement('div');
//     divEl.classList.add('accordion-items')

//     const titleEl = document.createElement('div');
//     titleEl.classList.add('accordion-title');
//     titleEl.dataset.id = item.id

//     const bodyEl = document.createElement('p');
//     bodyEl.classList.add('accordion-body', 'hide');

//     titleEl.textContent = item.title
//     bodyEl.textContent = item.body
//     divEl.appendChild(titleEl)
//     divEl.appendChild(bodyEl);
//     return divEl
// });

// items.forEach((item) => documentFrag.appendChild(item));

// accordionContainer.appendChild(documentFrag);

// const accordionEl = document.querySelector('.accordion');

// accordionEl.addEventListener('click', handleAccordionClick);


// function handleAccordionClick(e) {
//     const idClicked = e.target.dataset.id;

//     const accordionTitleEl = document.querySelectorAll('.accordion-title');

//     accordionTitleEl.forEach((el) => {
//         if (el.dataset.id === idClicked) {
//             el.nextElementSibling.classList.toggle('show')
//         }
//     })

// }





































const data = [
    { id: 1, title: 'JavaScript', body: "I can write JavaScript" },
    { id: 2, title: 'TypeScript', body: "I can write TypeScript" },
    { id: 3, title: 'React', body: "I can write React" }
];

/**
 * Creates a single accordion item.
 * @param {Object} item - Accordion item data {id, title, body}.
 * @returns {HTMLElement} - The accordion item element.
 */
function createAccordionItem(item) {
    const divEl = document.createElement('div');
    divEl.classList.add('accordion-items');

    const titleEl = document.createElement('div');
    titleEl.classList.add('accordion-title');
    titleEl.dataset.id = item.id;
    titleEl.textContent = item.title;

    const bodyEl = document.createElement('p');
    bodyEl.classList.add('accordion-body', 'hide');
    bodyEl.textContent = item.body;

    divEl.append(titleEl, bodyEl);
    return divEl;
}

/**
 * Renders the accordion items to the DOM efficiently.
 * @param {Array} data - Array of accordion data objects.
 */
function renderAccordion(data) {
    const accordionContainer = document.querySelector('.accordion');
    const documentFrag = document.createDocumentFragment();

    data.forEach(item => documentFrag.appendChild(createAccordionItem(item)));

    accordionContainer.appendChild(documentFrag);
}

/**
 * Handles accordion toggle on click.
 * @param {Event} e - Click event.
 */
function handleAccordionClick(e) {
    if (!e.target.classList.contains('accordion-title')) return;

    const clickedId = e.target.dataset.id;
    const accordionItems = document.querySelectorAll('.accordion-items');

    accordionItems.forEach(item => {
        const body = item.querySelector('.accordion-body');
        const title = item.querySelector('.accordion-title');

        if (title.dataset.id === clickedId) {
            body.classList.toggle('show');
            body.classList.toggle('hide');
        } else {
            body.classList.remove('show');
            body.classList.add('hide');
        }
    });
}

// Initialize accordion
renderAccordion(data);

// Event delegation for better performance
document.querySelector('.accordion').addEventListener('click', handleAccordionClick);
