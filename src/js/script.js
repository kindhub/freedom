import Countup from "./custom_modules/Countup";
import VacancyBtn from "./modules/VacancyBtn";

/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */
const mapAreaTurk = document.querySelector(".tmpl-hh__map__area--turkestanskaya");

mapAreaTurk.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-turkestan-item--green, .tmpl-hh__map-city-turkestan-name--black, .tmpl-hh__map-city-shymkent-item--green, .tmpl-hh__map-city-shymkent-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaTurk.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-turkestan-item--green, .tmpl-hh__map-city-turkestan-name--black, .tmpl-hh__map-city-shymkent-item--green, .tmpl-hh__map-city-shymkent-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});


///////////////


const mapAreaTaraz = document.querySelector(".tmpl-hh__map__area--zhambylskaya");

mapAreaTaraz.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-taraz-item--green, .tmpl-hh__map-city-taraz-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaTaraz.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-taraz-item--green, .tmpl-hh__map-city-taraz-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});

///////////////

const mapAreaAlmaty = document.querySelector(".tmpl-hh__map__area--almatinskaya");

mapAreaAlmaty.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-almaty-item--green, .tmpl-hh__map-city-almaty-name--black, .tmpl-hh__map-city-konaev-item--green, .tmpl-hh__map-city-konaev-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaAlmaty.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-almaty-item--green, .tmpl-hh__map-city-almaty-name--black, .tmpl-hh__map-city-konaev-item--green, .tmpl-hh__map-city-konaev-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});

///////////////

const mapAreaSemei = document.querySelector(".tmpl-hh__map__area--abayskaya");

mapAreaSemei.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-semei-item--green, .tmpl-hh__map-city-semei-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaSemei.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-semei-item--green, .tmpl-hh__map-city-semei-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});

///////////////

const mapAreaVKO = document.querySelector(".tmpl-hh__map__area--vko");

mapAreaVKO.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-vko-item--green, .tmpl-hh__map-city-vko-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaVKO.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-vko-item--green, .tmpl-hh__map-city-vko-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});

///////////////

const mapAreaAstana = document.querySelector(".tmpl-hh__map__area--akmolinskaya");

mapAreaAstana.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-astana-item--green, .tmpl-hh__map-city-astana-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaAstana.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-astana-item--green, .tmpl-hh__map-city-astana-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});

///////////////

const mapAreaAtyrau = document.querySelector(".tmpl-hh__map__area--atyrayskaya");

mapAreaAtyrau.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-atyrau-item--green, .tmpl-hh__map-city-atyrau-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaAtyrau.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-atyrau-item--green, .tmpl-hh__map-city-atyrau-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});

///////////////

const mapAreaAktau = document.querySelector(".tmpl-hh__map__area--mangistauskaya");

mapAreaAktau.addEventListener("mouseenter", () => {
  const itemsToHide = document.querySelectorAll(
    ".tmpl-hh__map-city-aktau-item--green, .tmpl-hh__map-city-aktau-name--black"
  );
  itemsToHide.forEach((item) => {
    item.style.display = "none";
  });
});

mapAreaAktau.addEventListener("mouseleave", () => {
  const itemsToShow = document.querySelectorAll(
    ".tmpl-hh__map-city-aktau-item--green, .tmpl-hh__map-city-aktau-name--black"
  );
  itemsToShow.forEach((item) => {
    item.style.display = ""; 
  });
});
/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

const scrollElements = document.querySelectorAll(".tmpl-hh__stats");
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};
const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      new Countup(".tmpl-hh__stats");
    }
  });
};

if (window.innerWidth < 529) {
  new Countup(".tmpl-hh__stats");
} else {
  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });
}

new VacancyBtn();
