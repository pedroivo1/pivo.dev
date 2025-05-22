const productContainers = [...document.querySelectorAll('.card-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

const scrollC = 0.7;

let containerWidths = productContainers.map(item => {
    const baseWidth = item.getBoundingClientRect().width * scrollC;
    return baseWidth;
});

window.addEventListener('resize', () => {
    containerWidths = productContainers.map(item => {
        const baseWidth = item.getBoundingClientRect().width * scrollC;
        return baseWidth;
    });
});

productContainers.forEach((item, i) => {
    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidths[i];
    });

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidths[i];
    });
});
