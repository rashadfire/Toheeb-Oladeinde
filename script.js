const introContainer = document.querySelector('.intro-container');
const introHeader = document.querySelector('.intro-header');
const intro = document.querySelectorAll('.intro');



window.addEventListener('DOMContentLoaded', () => {
    anim();
})

const anim = () => {
    setTimeout(() => {



        intro.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 450)
        });

        setTimeout(() => {
            intro.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50)
            });
        }, 2000);

        setTimeout(() => {
            introContainer.style.top = '-100vh'
        }, 2300)

    });
}





const reviews = [
    {
        id: 1,
        text: '“Yemi is good at what he does so I have no reason to go elsewhere for my UX writing needs” - Idris Abass, Estateintel',
    },
    {
        id: 2,
        text: '“My directors keep asking me how I keep stealing the show with my presentations!”- Nafisah Gbadamosi, Markets.ng',
    },
    {
        id: 3,
        text: '“You always dazzle me with your ad copy!” - Odun Kazeem, 1st Point Hotel',
    },
    {
        id: 4,
        text: '“You should charge more for work like these!” - Ira Selby Dakat, Sterling Bank',
    },
    {
        id: 5,
        text: '“This is so simple yet it captures everything I want this app to say!” -Farouk Musa, Bridge Networks',
    }
];

// const tab = document.querySelectorAll('.review-text');
const tab = document.getElementById('review-text');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentItem = 0;

const showPerson = (person) => {
    const item = reviews[person];
    tab.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem);
});

nextBtn.addEventListener('click', () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
    // console.log('clicked');
});

prevBtn.addEventListener('click', () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});


