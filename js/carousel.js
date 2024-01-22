const partnerLogos = ["usaid", "spaceInt", "tineti", "tegeta", "spectre", "tbcLeasing", "ufc"];
const dotsContainer = document.getElementById("dots-container");
let activeGroupIndex = 0;

let logosPerGroup = getLogosPerGroup(); 

window.addEventListener('resize', () => {
    logosPerGroup = getLogosPerGroup(); 
    console.log(logosPerGroup);
});

function getLogosPerGroup() {
    const screenWidth = window.innerWidth;

    return screenWidth < 571 ? 1 : screenWidth < 979 ? 2 : 3;
}

const createLogoElement = (imageUrl, altText) => {
  const logoLink = document.createElement("a");
  logoLink.href = "#";
  logoLink.target = "_blank";

  const logoElement = document.createElement("img");
  logoElement.src = imageUrl;
  logoElement.alt = altText;

  logoLink.appendChild(logoElement);

  return logoLink;
};

const createDot = (index) => {
  const dot = document.createElement("div");
  dot.className = "dot";
  dot.addEventListener("click", () => navigateToGroup(index));
  return dot;
};

const carouselContainer = document.getElementById("carousel-container");
const logos = partnerLogos.map(logoName => createLogoElement(`img/partner/${logoName}.png`, `${logoName} Logo`));
const dots = Array(Math.ceil(partnerLogos.length / logosPerGroup)).fill().map((_, index) => createDot(index));

const updateLogoVisibility = () => {
  const startIdx = activeGroupIndex * logosPerGroup;
  const endIdx = startIdx + logosPerGroup;

  logos.forEach((logo, logoIndex) => {
    logo.style.display = (logoIndex >= startIdx && logoIndex < endIdx) ? "block" : "none";
  });
};

carouselContainer.append(...logos);
dotsContainer.append(...dots);
updateLogoVisibility();

dots.forEach((dot, dotIndex) => {
  dot.dataset.groupNum = dotIndex;
  dot.addEventListener("click", () => navigateToGroup(dotIndex));
});

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");

arrowLeft.addEventListener("click", () => navigate("left"));
arrowRight.addEventListener("click", () => navigate("right"));

const navigateToGroup = (index) => {
  const wrapper = document.getElementById("carousel-container");

  if (index !== activeGroupIndex) {
    wrapper.classList.add("fade-out");

    wrapper.addEventListener("animationend", () => {
      wrapper.classList.remove("fade-out");
      wrapper.classList.add("fade-in");

      dots[activeGroupIndex].classList.remove("active");
      dots[index].classList.add("active");

      activeGroupIndex = index;

      updateLogoVisibility();

      wrapper.classList.remove("fade-in");
    }, { once: true });
  }
};

const navigate = (direction) => {
  const totalGroups = dots.length;
  const index = (direction === "left") ? ((activeGroupIndex > 0) ? (activeGroupIndex - 1) : (totalGroups - 1)) : ((activeGroupIndex < totalGroups - 1) ? (activeGroupIndex + 1) : 0);

  navigateToGroup(index);
};

setInterval(() => navigate("right"), 4500);
