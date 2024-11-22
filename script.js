const phrases = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis...", 
    "In mi velit, fringilla sed velit vel, ornare varius dui. Nunc ...", 
    "In aliquet fringilla libero, quis dapibus massa tincidunt a..."
  ];
  const carouselQuotes = document.getElementById("carouselQuotes");

phrases.forEach((phrase, index) => {
    const activeClass = index === 0 ? 'active' : '';
    const carouselItem = `
        <div class="carousel-item ${activeClass}">
            <p>${phrase}</p>
        </div>
    `;
    carouselQuotes.innerHTML += carouselItem;
});