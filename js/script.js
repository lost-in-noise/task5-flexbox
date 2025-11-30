const track = document.getElementById("sliderTrack");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const counter = document.getElementById("slide-counter");
const images = track.getElementsByTagName("img");

let currentIndex = 0;
const totalSlides = images.length;
const slideWidth = 430; // სურათის სიგანე (400) + gap (30)

// ღილაკებზე კლიკის ფუნქცია
nextBtn.addEventListener("click", () => {
  track.scrollBy({ left: slideWidth, behavior: "smooth" });
  updateCounter(1);
});

prevBtn.addEventListener("click", () => {
  track.scrollBy({ left: -slideWidth, behavior: "smooth" });
  updateCounter(-1);
});

// მთვლელის განახლება
function updateCounter(direction) {
  currentIndex += direction;

  // შეზღუდვები, რომ 1-ზე დაბლა და 5-ზე მაღლა არ ავიდეს ვიზუალურად
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex >= totalSlides) currentIndex = totalSlides - 1;

  // უფრო ზუსტი მეთოდია სქროლის პოზიციის მოსმენა,
  // მაგრამ მარტივი ვერსიისთვის ესეც საკმარისია:

  // სინამდვილეში სქროლის დროს ინდექსის გასაგებად ჯობია მათემატიკა:
  setTimeout(() => {
    let index = Math.round(track.scrollLeft / slideWidth) + 1;
    counter.innerText = `${index} / ${totalSlides}`;
  }, 300); // მცირე დაყოვნება სქროლის დასრულებამდე
}

// სქროლის მოსმენა (რომ მაუსით გადაწევისასაც შეიცვალოს ციფრი)
track.addEventListener("scroll", () => {
  let index = Math.round(track.scrollLeft / slideWidth) + 1;
  counter.innerText = `${index} / ${totalSlides}`;
  currentIndex = index - 1;
});
