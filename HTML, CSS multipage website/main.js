// Handling navbar
const handleNav = () => {
  let navbar = document.getElementById('top-nav');
  navbar.classList.toggle('h-0');
}





// To modify the view of the header, as the scrolling happens
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
    window.scrollY > 30
        ? header.classList.add('white-header')
        : header.classList.remove('white-header')
})





// Tab
const showTab = (e) => {
    let paragraphs = document.querySelectorAll('#para-container > div');
    let titles = document.querySelectorAll('#tabs  h5');
    let activePara;
    let activeTitle;

    for(let title of titles) {
        title.classList.contains('active-tab')
        ? title.classList.remove('active-tab')
        : null
    }
    
    for(let paragraph of paragraphs) {
      !(paragraph.classList.contains('d-none'))
        ? paragraph.classList.add('d-none')
        : null

    

      e.id.split('-')[0] === paragraph.id.split('-')[0]
        ? (
            e.classList.add('active-tab'),
            paragraph.classList.remove('d-none')
          )
        : null
    }
}





// Carousel
const handleSlider = (btn) => {
  let prevBtn;
  let idPrev;
  let idNext;
  let buttons = document.querySelectorAll('#buttons  span');
  let slider = document.getElementById('carousel')
  let prevSlide = document.querySelector('#carousel > div:first-child');
  let rightElement = prevSlide;
  let nextSlide = document.querySelector('#carousel > div:last-child');
  let activeSlide = document.getElementById('middle');


  for(let button of buttons) {
    button.classList.contains('active-btn')
    ? prevBtn = button
    : null
  }  

  btn.classList.toggle('active-btn');
  prevBtn.classList.toggle('active-btn');

  idPrev = prevBtn.id.match(/\d+/)[0];
  idNext = btn.id.match(/\d+/)[0];
  
  const bringNext = () => {
      if(idNext === '1') {
        nextSlide.innerHTML = `<div class="flex flex-column px-15">
            <div class="quote-icon bg-gradient rounded flex">
                <i class="fa-solid fa-quote-right text-white fs-18"></i>
            </div>

            <p class="feedback-text fs-19 text-gray fw-300 centered">
                "Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."
            </p>

            <h6 class="username text-capitalized fs-19 text-darkGray fw-700 letter-sp"> william smith </h6>
            <h6 class="role sm-title fw-400"> new co-founder </h6>
          </div>`
      } else if(idNext === '2') {
        nextSlide.innerHTML = `<div class="flex flex-column px-15">
            <div class="quote-icon bg-gradient rounded flex">
                <i class="fa-solid fa-quote-right text-white fs-18"></i>
            </div>

            <p class="feedback-text fs-19 text-gray fw-300 centered">
                "Quisque lacinia sed velit et maximus. Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus."
            </p>

            <h6 class="username text-capitalized fs-19 text-darkGray fw-700 letter-sp"> vinny smart </h6>
            <h6 class="role sm-title fw-400"> digital marketer </h6>
        </div>`
      } else {
        nextSlide.innerHTML = `<div class="flex flex-column px-15">
            <div class="quote-icon bg-gradient rounded flex">
                <i class="fa-solid fa-quote-right text-white fs-18"></i>
            </div>

            <p class="feedback-text fs-19 text-gray fw-300 centered">
                "Vestibulum mauris ipsum, tempor tincidunt justo sit amet, bibendum tincidunt dui. Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis."
            </p>

            <h6 class="username text-capitalized fs-19 text-darkGray fw-700 letter-sp"> trevor liam </h6>
            <h6 class="role sm-title fw-400"> technology chef </h6>
        </div>`
      }


    activeSlide.setAttribute('id', 'left');
    nextSlide.setAttribute('id', 'middle');
    slider.style.left = '-200%'
  }
  
  const bringPrev = () => {
      if(idNext === '1') {
        prevSlide.innerHTML = `<div class="flex flex-column px-15">
            <div class="quote-icon bg-gradient rounded flex">
                <i class="fa-solid fa-quote-right text-white fs-18"></i>
            </div>

            <p class="feedback-text fs-19 text-gray fw-300 centered">
                "Ut elementum a elit sed tristique. Pellentesque sed semper erat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean quam erat, rutrum ut malesuada."
            </p>

            <h6 class="username text-capitalized fs-19 text-darkGray fw-700 letter-sp"> william smith </h6>
            <h6 class="role sm-title fw-400"> new co-founder </h6>
          </div>`
      } else if(idNext === '2') {
        prevSlide.innerHTML = `<div class="flex flex-column px-15">
              <div class="quote-icon bg-gradient rounded flex">
                  <i class="fa-solid fa-quote-right text-white fs-18"></i>
              </div>

              <p class="feedback-text fs-19 text-gray fw-300 centered">
                  "Quisque lacinia sed velit et maximus. Quisque dictum, lacus a malesuada finibus, arcu magna luctus risus, eu accumsan risus elit vitae lacus."
              </p>

              <h6 class="username text-capitalized fs-19 text-darkGray fw-700 letter-sp"> vinny smart </h6>
              <h6 class="role sm-title fw-400"> digital marketer </h6>
          </div>`
      } else {
        prevSlide.innerHTML = `<div class="flex flex-column px-15">
              <div class="quote-icon bg-gradient rounded flex">
                  <i class="fa-solid fa-quote-right text-white fs-18"></i>
              </div>

              <p class="feedback-text fs-19 text-gray fw-300 centered">
                  "Vestibulum mauris ipsum, tempor tincidunt justo sit amet, bibendum tincidunt dui. Aenean molestie, odio quis viverra ultricies, leo tellus lacinia neque, sit amet maximus tortor nunc aliquet felis."
              </p>

              <h6 class="username text-capitalized fs-19 text-darkGray fw-700 letter-sp"> trevor liam </h6>
              <h6 class="role sm-title fw-400"> technology chef </h6>
          </div>`
      }
      
    slider.style.left = '0'
  }

  if((idPrev !== '1'  ||  idNext !== '3')   &&    (idPrev < idNext)  ||  (idPrev === '3'  &&  idNext === '1')) {
    bringNext()
  } else if ((idPrev !== '3' || idNext !== '1')  &&   (idPrev > idNext)  ||  (idPrev === '1'  &&  idNext === '3')) {
    bringPrev()
  } else {
    console.log('bring right')
  }
}