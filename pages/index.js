const countryCardTemplate = document.querySelector(
  "#country-card-template"
).content;
const countriesSliderLine = document.querySelector(".countries-slider__line");
const sliderDotsWrapper = document.querySelector(".slider__dots-wrapper");
const nextButtonSlider = document.querySelector(
  "#countries-slider__next-button"
);
const prevButtonSlider = document.querySelector(
  "#countries-slider__prev-button"
);
const offerTemplate = document.querySelector("#offer-template").content;
const offers = document.querySelector(".offers");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");
const popupOffer = document.querySelector(".popup__offer");
const popupTitle = document.querySelector(".popup__title");
const popupPriceSpan = document.querySelector(".popup__price_span");

const headerMenuButton = document.querySelector(".header__menu-button");
const headerPopupMenu = document.querySelector(".header__popup-menu");
//Массив из карточек стран

const countriesMassive = [
  {
    countryCardImageLink: "./images/CountrySlider/Berlin.jpg",
    countryCardImageAlt: "Фото Берлина",
    countryCardTitle: "Berlin",
    countryCardFlagLink: "./images/CountryFlags/Германия.jpg",
    countryCardAlt: "Флаг Германии",
    countryCardCountryName: "Germany",
    countryCardPriceSpan: "€105.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/Cairo.png",
    countryCardImageAlt: "Фото Египта",
    countryCardTitle: "Cairo",
    countryCardFlagLink: "./images/CountryFlags/Египет.jpg",
    countryCardAlt: "Флаг Египта",
    countryCardCountryName: "Egypt",
    countryCardPriceSpan: "€100.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/London.jpg",
    countryCardImageAlt: "Фото Лондона",
    countryCardTitle: "London",
    countryCardFlagLink: "./images/CountryFlags/Великобритания.jpg",
    countryCardAlt: "Флаг Великобритании",
    countryCardCountryName: "Great Britan",
    countryCardPriceSpan: "€150.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/Madrid.png",
    countryCardImageAlt: "Фото Мадрида",
    countryCardTitle: "Madrid",
    countryCardFlagLink: "./images/CountryFlags/Испания.jpg",
    countryCardAlt: "Флаг Испании",
    countryCardCountryName: "Spain",
    countryCardPriceSpan: "€87.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/Moscow.jpg",
    countryCardImageAlt: "Фото Москвы",
    countryCardTitle: "Moscow",
    countryCardFlagLink: "./images/CountryFlags/Россия.jpg",
    countryCardAlt: "Флаг России",
    countryCardCountryName: "Russia",
    countryCardPriceSpan: "€40.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/New-York.jpeg",
    countryCardImageAlt: "Фото Нью Йорка",
    countryCardTitle: "New York",
    countryCardFlagLink: "./images/CountryFlags/США.jpg",
    countryCardAlt: "Флаг США",
    countryCardCountryName: "USA",
    countryCardPriceSpan: "€95.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/Paris.png",
    countryCardImageAlt: "Фото Парижа",
    countryCardTitle: "Paris",
    countryCardFlagLink: "./images/CountryFlags/Франция.jpg",
    countryCardAlt: "Флаг Франции",
    countryCardCountryName: "France",
    countryCardPriceSpan: "€90.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/Rome.png",
    countryCardImageAlt: "Фото Рима",
    countryCardTitle: "Rome",
    countryCardFlagLink: "./images/CountryFlags/Италия.jpg",
    countryCardAlt: "Флаг Италии",
    countryCardCountryName: "Italy",
    countryCardPriceSpan: "€100.00",
  },
  {
    countryCardImageLink: "./images/CountrySlider/Sankt-Petersburgh.jpg",
    countryCardImageAlt: "Фото Санкт-Петербурга",
    countryCardTitle: "St. Petersburg",
    countryCardFlagLink: "./images/CountryFlags/Россия.jpg",
    countryCardAlt: "Флаг России",
    countryCardCountryName: "Russia",
    countryCardPriceSpan: "€50.00",
  },
];

//Появление карточек старн на странице
countriesMassive.forEach(function (elem) {
  const loadedCountryCard = createCountryCard(
    elem.countryCardImageLink,
    elem.countryCardImageAlt,
    elem.countryCardTitle,
    elem.countryCardFlagLink,
    elem.countryCardAlt,
    elem.countryCardCountryName,
    elem.countryCardPriceSpan
  );
  countriesSliderLine.append(loadedCountryCard);
  const sliderDot = document.createElement("div");
  sliderDot.classList.add("slider__dot");
  sliderDotsWrapper.append(sliderDot);
});

//Функция создания карточки страны

function createCountryCard(
  countryCardImageLink,
  countryCardImageAlt,
  countryCardTitle,
  countryCardFlagLink,
  countryCardAlt,
  countryCardCountryName,
  countryCardPriceSpan
) {
  const newElement = countryCardTemplate
    .querySelector(".country-card")
    .cloneNode(true);
  const newElementcountryCardImage = newElement.querySelector(
    ".country-card__image"
  );
  const newElementcountryCardTitle = newElement.querySelector(
    ".country-card__title"
  );
  const newElementcountryCardFlag = newElement.querySelector(
    ".country-card__flag"
  );
  const newElementcountryCardCountryName = newElement.querySelector(
    ".country-card__country-name"
  );
  const newElementcountryCardPriceSpan = newElement.querySelector(
    ".country-card__price_span"
  );
  newElementcountryCardImage.src = countryCardImageLink;
  newElementcountryCardImage.alt = countryCardImageAlt;
  newElementcountryCardTitle.textContent = countryCardTitle;
  newElementcountryCardFlag.src = countryCardFlagLink;
  newElementcountryCardFlag.alt = countryCardAlt;
  newElementcountryCardCountryName.textContent = countryCardCountryName;
  newElementcountryCardPriceSpan.textContent = countryCardPriceSpan;

  return newElement;
}

//Реализация работы слайдера
function Carusel(crslId) {
  let id = document.getElementById(crslId);
  if (id) {
    this.crslRoot = id;
  } else {
    this.crslRoot = document.querySelector(".slider");
  }

  // Carousel objects
  this.crslList = this.crslRoot.querySelector(".countries-slider__line");
  this.crslElements = this.crslList.querySelectorAll(".country-card");
  this.crslElemFirst = this.crslList.querySelector(".country-card");
  this.leftArrow = this.crslRoot.querySelector(
    "#countries-slider__prev-button"
  );
  this.rightArrow = this.crslRoot.querySelector(
    "#countries-slider__next-button"
  );
  this.indicatorDots = this.crslRoot.querySelector(".slider__dots-wrapper");

  // Initialization
  this.options = Carusel.defaults;
  Carusel.initialize(this);
}

Carusel.defaults = {
  // Default options for the carousel
  elemVisible: 4, // Кол-во отображаемых элементов в карусели
  loop: true, // Бесконечное зацикливание карусели
  auto: true, // Автоматическая прокрутка
  interval: 5000, // Интервал между прокруткой элементов (мс)
  speed: 750, // Скорость анимации (мс)
  touch: true, // Прокрутка  прикосновением
  arrows: true, // Прокрутка стрелками
  dots: true, // Индикаторные точки
};

Carusel.prototype.elemPrev = function (num) {
  num = num || 1;

  if (this.options.dots) this.dotOn(this.currentElement);
  this.currentElement -= num;
  if (this.currentElement < 0) this.currentElement = this.dotsVisible - 1;
  if (this.options.dots) this.dotOff(this.currentElement);

  if (!this.options.loop) {
    // сдвиг вправо без цикла
    this.currentOffset += this.elemWidth * num;
    this.crslList.style.marginLeft = this.currentOffset + "px";
    if (this.currentElement == 0) {
      this.leftArrow.style.display = "none";
      this.touchPrev = false;
    }
    this.rightArrow.style.display = "block";
    this.touchNext = true;
  } else {
    // сдвиг вправо с циклом
    let elm,
      buf,
      this$ = this;
    for (let i = 0; i < num; i++) {
      elm = this.crslList.lastElementChild;
      buf = elm.cloneNode(true);
      this.crslList.insertBefore(buf, this.crslList.firstElementChild);
      this.crslList.removeChild(elm);
    }
    this.crslList.style.marginLeft = "-" + this.elemWidth * num + "px";
    let compStyle = window.getComputedStyle(this.crslList).marginLeft;
    this.crslList.style.cssText =
      "transition:margin " + this.options.speed + "ms ease;";
    this.crslList.style.marginLeft = "0px";
    setTimeout(function () {
      this$.crslList.style.cssText = "transition:none;";
    }, this.options.speed);
  }
};

Carusel.prototype.elemNext = function (num) {
  num = num || 1;

  if (this.options.dots) this.dotOn(this.currentElement);
  this.currentElement += num;
  if (this.currentElement >= this.dotsVisible) this.currentElement = 0;
  if (this.options.dots) this.dotOff(this.currentElement);

  if (!this.options.loop) {
    // сдвиг влево без цикла
    this.currentOffset -= this.elemWidth * num;
    this.crslList.style.marginLeft = this.currentOffset + "px";
    if (this.currentElement == this.dotsVisible - 1) {
      this.rightArrow.style.display = "none";
      this.touchNext = false;
    }
    this.leftArrow.style.display = "block";
    this.touchPrev = true;
  } else {
    // сдвиг влево с циклом
    let elm,
      buf,
      this$ = this;
    this.crslList.style.cssText =
      "transition:margin " + this.options.speed + "ms ease;";
    this.crslList.style.marginLeft = "-" + this.elemWidth * num + "px";
    setTimeout(function () {
      this$.crslList.style.cssText = "transition:none;";
      for (let i = 0; i < num; i++) {
        elm = this$.crslList.firstElementChild;
        buf = elm.cloneNode(true);
        this$.crslList.appendChild(buf);
        this$.crslList.removeChild(elm);
      }
      this$.crslList.style.marginLeft = "0px";
    }, this.options.speed);
  }
};

Carusel.prototype.dotOn = function (num) {
  this.indicatorDotsAll[num].style.cssText =
    "background-color:#BBB; cursor:pointer;";
};

Carusel.prototype.dotOff = function (num) {
  this.indicatorDotsAll[num].style.cssText =
    "background-color:rgba(23, 195, 178, 1); cursor:default;";
};

Carusel.initialize = function (that) {
  // ConstCarusels
  that.elemCount = that.crslElements.length; // Количество элементов
  that.dotsVisible = that.elemCount; // Число видимых точек
  let elemStyle = window.getComputedStyle(that.crslElemFirst);
  that.elemWidth =
    that.crslElemFirst.offsetWidth + // Ширина элемента (без margin)
    parseInt(elemStyle.marginLeft) +
    parseInt(elemStyle.marginRight);

  // Variables
  that.currentElement = 0;
  that.currentOffset = 0;
  that.touchPrev = true;
  that.touchNext = true;
  let xTouch, yTouch, xDiff, yDiff, stTime, mvTime;
  let bgTime = getTime();

  // Functions
  function getTime() {
    return new Date().getTime();
  }
  function setAutoScroll() {
    that.autoScroll = setInterval(function () {
      let fnTime = getTime();
      if (fnTime - bgTime + 10 > that.options.interval) {
        bgTime = fnTime;
        that.elemNext();
      }
    }, that.options.interval);
  }

  // Start initialization
  if (that.elemCount <= that.options.elemVisible) {
    // Отключить навигацию
    that.options.auto = false;
    that.options.touch = false;
    that.options.arrows = false;
    that.options.dots = false;
    that.leftArrow.style.display = "none";
    that.rightArrow.style.display = "none";
  }

  if (!that.options.loop) {
    // если нет цикла - уточнить количество точек
    that.dotsVisible = that.elemCount - that.options.elemVisible + 1;
    that.leftArrow.style.display = "none"; // отключить левую стрелку
    that.touchPrev = false; // отключить прокрутку прикосновением вправо
    that.options.auto = false; // отключить автопркрутку
  } else if (that.options.auto) {
    // инициализация автопрокруки
    setAutoScroll();
    // Остановка прокрутки при наведении мыши на элемент
    that.crslList.addEventListener(
      "mouseenter",
      function () {
        clearInterval(that.autoScroll);
      },
      false
    );
    that.crslList.addEventListener("mouseleave", setAutoScroll, false);
  }

  if (that.options.touch) {
    // инициализация прокрутки прикосновением
    that.crslList.addEventListener(
      "touchstart",
      function (e) {
        xTouch = parseInt(e.touches[0].clientX);
        yTouch = parseInt(e.touches[0].clientY);
        stTime = getTime();
      },
      false
    );
    that.crslList.addEventListener(
      "touchmove",
      function (e) {
        if (!xTouch || !yTouch) return;
        xDiff = xTouch - parseInt(e.touches[0].clientX);
        yDiff = yTouch - parseInt(e.touches[0].clientY);
        mvTime = getTime();
        if (
          Math.abs(xDiff) > 15 &&
          Math.abs(xDiff) > Math.abs(yDiff) &&
          mvTime - stTime < 75
        ) {
          stTime = 0;
          if (that.touchNext && xDiff > 0) {
            bgTime = mvTime;
            that.elemNext();
          } else if (that.touchPrev && xDiff < 0) {
            bgTime = mvTime;
            that.elemPrev();
          }
        }
      },
      false
    );
  }

  if (that.options.arrows) {
    // инициализация стрелок
    if (!that.options.loop)
      that.crslList.style.cssText =
        "transition:margin " + that.options.speed + "ms ease;";
    that.leftArrow.addEventListener(
      "click",
      function () {
        let fnTime = getTime();
        if (fnTime - bgTime > that.options.speed) {
          bgTime = fnTime;
          that.elemPrev();
        }
      },
      false
    );
    that.rightArrow.addEventListener(
      "click",
      function () {
        let fnTime = getTime();
        if (fnTime - bgTime > that.options.speed) {
          bgTime = fnTime;
          that.elemNext();
        }
      },
      false
    );
  } else {
    that.leftArrow.style.display = "none";
    that.rightArrow.style.display = "none";
  }

  if (that.options.dots) {
    // инициализация индикаторных точек
    let sum = "",
      diffNum;
    for (let i = 0; i < that.dotsVisible; i++) {
      sum += '<span class="slider__dot"></span>';
    }
    that.indicatorDots.innerHTML = sum;
    that.indicatorDotsAll = that.crslRoot.querySelectorAll("span.slider__dot");
    // Назначаем точкам обработчик события 'click'
    for (let n = 0; n < that.dotsVisible; n++) {
      that.indicatorDotsAll[n].addEventListener(
        "click",
        function () {
          diffNum = Math.abs(n - that.currentElement);
          if (n < that.currentElement) {
            bgTime = getTime();
            that.elemPrev(diffNum);
          } else if (n > that.currentElement) {
            bgTime = getTime();
            that.elemNext(diffNum);
          }
          // Если n == that.currentElement ничего не делаем
        },
        false
      );
    }
    that.dotOff(0); // точка[0] выключена, остальные включены
    for (let i = 1; i < that.dotsVisible; i++) {
      that.dotOn(i);
    }
  }
};

new Carusel();

//Массив из карточек Лучших отелей

const hotels = [
  {
    offerTitle: "Holidays Suites Navona - ITALY",
    offerPricespan: "€149,00",
    offerImage: "./images/Offers/Italy.jpg",
  },
  {
    offerTitle: "Kantua hotel - THAILAND",
    offerPricespan: "€99,00",
    offerImage: "./images/Offers/THAILAND.jpg",
  },
  {
    offerTitle: "NH Madrid Zurbano - MADRID",
    offerPricespan: "€89,00",
    offerImage: "./images/Offers/MADRID.jpg",
  },
  {
    offerTitle: "Royal Plaza Hotel - HONG KONG",
    offerPricespan: "€89,00",
    offerImage: "./images/Offers/HONG_KONG.jpg",
  },
  {
    offerTitle: "Le Meridien - ABU DHABI",
    offerPricespan: "€109,00",
    offerImage: "./images/Offers/ABU_DHABI.jpg",
  },
  {
    offerTitle: "Arbat's Stars - MOSCOW",
    offerPricespan: "€100,00",
    offerImage: "./images/Offers/MOSCOW.jpg",
  },
];

//Функция создания карточки предложения

function createOfferCard(Title, Pricespan, Image) {
  const newOffer = offerTemplate.querySelector(".offer").cloneNode(true);
  const newOfferTitel = newOffer.querySelector(".offer__title");
  const newOfferPricespan = newOffer.querySelector(".offer__price_span");
  newOfferTitel.textContent = Title;
  newOfferPricespan.textContent = Pricespan;
  newOffer.style.cssText = `background-image:  url(${Image});`;
  newOfferTitel.addEventListener("click", function (event) {
    event.preventDefault();
  });
  newOffer.addEventListener("click", function () {
    popup.classList.add("popup_opened");
    popupTitle.textContent = newOfferTitel.textContent;
    popupPriceSpan.textContent = newOfferPricespan.textContent;
    popupOffer.style.cssText = newOffer.style.cssText;
    popupTitle.addEventListener(function(event){
      event.preventDefault();
    });
  });
  return newOffer;
}

//Добавление карточек предложений на страницу

hotels.forEach(function (elem) {
  const loadedOffer = createOfferCard(
    elem.offerTitle,
    elem.offerPricespan,
    elem.offerImage
  );
  offers.append(loadedOffer);
});

//Реализация работы кнопки закрытия popup
popupCloseButton.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
  popupTitle.textContent = "";
  popupPriceSpan.textContent = "";
  popupOffer.style.cssText = "";
});

//Реализация работы кнопки для всплывающего меню

headerMenuButton.addEventListener("click", function(){
  headerPopupMenu.classList.toggle("header__popup-menu_opened");
})


