const generateRandomCard = (mealType) => {

    const dinnerCards = [
        { name: 'Омурайсу', image: '/img/omuraysu.jpg', description:'Японский омлет с рисом, обжаренным с курицей или овощами, подается с кетчупом или соусом демиглас.', link:"/food/omuraysu.html" },
        { name: 'Суши Филадельфия с лососем', image: '/img/sushi.jpg', description: 'Рисовые роллы или нигири с кусочком свежего лосося, иногда с васаби и соевым соусом.', link:"/food/sushi.html" },
        { name: 'Окономияки', image: '/img/okonomiyaki.png', description: 'Японский "пирог" или "блин" с капустой, мясом или морепродуктами, поливается соусом и майонезом.', link:"/food/okonomiyaki.html" },
        { name: 'Тайяки', image: '/img/taiyaki.jpg', description: 'Японские вафли в форме рыб, обычно с начинкой из сладкой красной фасоли, но могут быть и с шоколадом или кремом.', link:"/food/tayaki.html" },
        { name: 'Данго', image: '/img/dango.jpg', description: 'Маленькие рисовые шарики на шпажке, часто подаются с соусом или сиропом, сладкие или соленые.' , link:"/food/dango.html"},
        { name: 'Тонкацу  из курицы', image: '/img/tonkacu.jpeg', description:'Тонкацу из курицы: Кусочки курицы, обваленные в панировке и обжаренные до золотистой корочки. Подается с капустой, рисом и тонкацу соусом. Популярное блюдо.' },
        { name: 'Японский хлопковый чизкейк', image: '/img/chizkeyk.jpg', description:'Японский хлопковый чизкейк: Легкий и воздушный десерт, напоминающий суфле, с мягкой текстурой и нежным сливочным вкусом. Часто подается с фруктами или сахарной пудрой.' },
        { name: 'Блинный торт с чаем матча', image: '/img/matcha.jpg', description:'Торт, состоящий из тонких блинов, прослоенных кремом с чаем матча. Красивый и впечатляющий десерт для особых случаев.' },
        { name: 'Сукияки', image: '/img/sukiyaki.png', description:'Японское блюдо из тонко нарезанного мяса, картофеля, овощей, тофу и грибов, приготовленных в сладко-соленом соусе из соевого соуса, сахара и мирина.' },
        { name: 'Оякодон', image: '/img/oyakodon.png', description:'Рисовая чаша с курицей и яйцом, тушеными в соевом соусе с сахаром и мирином, дополненная зеленым луком. Сытное и вкусное блюдо.' },
        { name: 'Онигирадзу', image: '/img/onigiradzu.jpeg', description:'Рисовые сэндвичи отлично подойдут в качестве сытного перекуса или ужина в азиатском стиле. Для их приготовления не требуется специальных навыков – они всегда получаются, главное, подобрать начинку по вкусу.' },
    ];

    const lunchCards = [
        { name: 'Рамен', image: '/img/ramen.jpg', description:' Суп с пшеничной лапшой, бульоном (свинина, курица, мисо), мясом, яйцом, водорослями, часто дополненный овощами и приправами.', link:"/food/ramen.html" },
        { name: 'Терияки', image: '/img/teriyaki.jpg', description: 'Блюдо из мяса, рыбы или овощей, обжаренное или запеченное с соусом терияки, сладким и соленым.', link:"/food/teriyaki.html" },
        { name: 'Лапша удон', image: '/img/udonlapsha.png', description: 'Толстая пшеничная лапша в бульоне или жареная, часто с мясом, овощами и темпурой.' },
        { name: 'Гёдза с курицей', image: '/img/gedza.jpg', description:'Японские пельмени с начинкой из курицы и овощей, обжаренные или на пару, подаются с соусом.' },
        { name: 'Салат из маринованного осьминога', image: '/img/osmnog.png', description:' Салат с кусочками осьминога, маринованного в уксусе и соевом соусе, с овощами.' },
        { name: 'Соба сэн-сой', image: '/img/soba.png', description: 'Холодная гречневая лапша с соевым соусом, кунжутным маслом, свежими овощами и иногда мясом или морепродуктами. Легкое и освежающее блюдо.' },
        { name: 'Жареные королевские креветки', image: '/img/kerevetki.png', description: 'Жареные королевские креветки</h1>Крупные креветки в хрустящей панировке, обжаренные до золотистой корочки, подаются с соусом тартар. Популярное блюдо в ресторанах.' },
        { name: 'Кацу-кокоро', image: '/img/katsukaru.jpg', description: 'Поджаренные куриные кусочки в соусе на основе меда, соевого соуса и масла с крошками кари. Сервируется с рисом и овощами.' },
        { name: 'Судзуки карааге', image: '/img/sudzuki.jpg', description: 'Обжаренные кусочки морского окуня в легкой хрустящей панировке, подаются с лимоном и соевым соусом. Вкусное и хрустящее блюдо с морепродуктами.' },
        { name: 'Кацудон из курицы', image: '/img/kacudon.jpg', description: 'Рисовая чаша с хрустящей куриной котлетой (тонкацу), тушеной с яйцом и луком в сладко-соленом соусе. Популярное, сытное и комфортное блюдо' },
    ];
    const breakfastCards = [
        { name: 'Тамагояки', image: '/img/tamagoyaki.jpg', description:'Сладкий японский омлет, свернутый в слои, часто подается в суши или как закуска.', link:"/index.html" },
        { name: 'Онигири', image: '/img/onigiri.jpg', description:'Треугольные рисовые колобки с начинками (тунец, лосось, слива), завернутые в нори, удобные для перекуса.', link:"/food/onigiri.html" },
        { name: 'Мисо суп', image: '/img/miso.png', description:'Традиционный суп с мисо пастой, тофу, водорослями и зеленью, часто подается как часть японского завтрака.', link:"/food/miso.html" },
        { name: 'Моти', image: '/img/mochi.jpg', description:'Липкие рисовые лепешки из клейкого риса, часто начиненные сладкой пастой из красной фасоли или фруктами.', link:"/food/moti.html" },
        { name: 'Японский клубничный торт', image: '/img/tortskulub.jpg', description:'Легкий и воздушный бисквитный торт с кремом и свежими клубниками, популярен для праздников.', link:"/food/tortsklub.html" },
        { name: 'Кастелла', image: '/img/kastella.png', description:'Японский бисквитный торт португальского происхождения, мягкий и воздушный, обычно с медом.' },
        { name: 'Тамаго какэ гохан', image: '/img/tamago.jpg', description:'Рис, политый сырым яйцом и соевым соусом, иногда с добавлением приправ. Простое, питательное блюдо, популярное в японских семьях.' },
        { name: 'Натто', image: '/img/natto.jpg', description:'Ферментированные соевые бобы с липкой текстурой и сильным запахом. Богаты белком и пробиотиками. Часто подаются с рисом, соевым соусом и горчицей.' },
        { name: 'Цукэмоно', image: '/img/cukemono.jpg', description:'Маринованные овощи, которые часто подаются в качестве гарнира к рису и другим блюдам. Они добавляют хруст и освежающий вкус к завтраку.' },
        { name: 'Роллы Сяке-Маки', image: '/img/syakemake.jpg', description:'Роллы с лососем, рисом и нори. Обычно подаются с васаби, имбирём и соевым соусом. Популярная закуска в японской кухне, обладает свежим вкусом и текстурой.' },
        { name: 'Матча крем фраппе', image: '/img/icematcha.png', description:'Любители молочных коктейлей часто заказывают в уютных японских кафе Матча крем фраппе. Это очень полезный напиток, который также подходит для детей.' },
    ];

    const getRandomCard = (cards) => cards[Math.floor(Math.random() * cards.length)];

    let selectedCard;
    if (mealType === 'dinner') {
        selectedCard = getRandomCard(dinnerCards);
    } else if (mealType === 'lunch') {
        selectedCard = getRandomCard(lunchCards);
    } else if (mealType === 'breakfast') {
        selectedCard = getRandomCard(breakfastCards);
    } else {
        return; // Handle invalid mealType
    }

    // Display the selected card
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = `

        <div class="generated_wrap">
     <img src="${selectedCard.image}" alt="${selectedCard.name}" class="generated_img" />
         <div class="generated_box">
            <h2 class="generated_title">${selectedCard.name}</h2>
            <p class="generated_description">${selectedCard.description}</p>
            <a href="${selectedCard.link}" class="generated_link">приготовить</a>
            </div>
        </div>
    `;
};

// Example button click event handler
document.getElementById('showMealsBtn').addEventListener('click', () => {
    const selectedMealType = document.querySelector('input[name="mealType"]:checked').value;
    generateRandomCard(selectedMealType);
});


   
  
  const mealSelect = document.getElementById('mealSelect');
  const showMealsBtn = document.getElementById('showMealsBtn');
  const quoteCard = document.querySelector('.quote-card');
  const quoteCardContent = document.querySelector('.quote-text');
  
  showMealsBtn.addEventListener('click', () => {
    let selectedMeal = mealSelect.value;
    let cardContent = generateRandomCard(selectedMeal);
    quoteCardContent.textContent = cardContent;
    quoteCard.style.display = 'block';
  });
  
  // Показать кнопку сразу после загрузки страницы
  showMealsBtn.style.display = 'block';

 
      
// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    menu.addEventListener("click", (event) => {
      if(event.target){
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)
  