const data = [
    {
        id: 1,
        title: 'Javscript',
        body: "I can write Javascript"
    },
    {
        id: 2,
        title: 'Typescript',
        body: "I can write Typescript"
    },
    {
        id: 3,
        title: 'React',
        body: "I can write React"
    }
];

const documentFrag = document.createDocumentFragment()
const accordionContainer = document.querySelector('.accordion');

const items = data.map((item) => {


    const divEl = document.createElement('div');
    divEl.classList.add('accordion-items')

    const titleEl = document.createElement('div');
    titleEl.classList.add('accordion-title');
    titleEl.dataset.id = item.id

    const bodyEl = document.createElement('p');
    bodyEl.classList.add('accordion-body', 'hide');

    titleEl.textContent = item.title
    bodyEl.textContent = item.body
    divEl.appendChild(titleEl)
    divEl.appendChild(bodyEl);
    return divEl
});

items.forEach((item) => documentFrag.appendChild(item));

accordionContainer.appendChild(documentFrag);

const accordionEl = document.querySelector('.accordion');

accordionEl.addEventListener('click', handleAccordionClick);


function handleAccordionClick(e) {
    const idClicked = e.target.dataset.id;

    const accordionTitleEl = document.querySelectorAll('.accordion-title');

    accordionTitleEl.forEach((el) => {
        if (el.dataset.id === idClicked) {
            el.nextElementSibling.classList.toggle('show')
        }
    })

}
