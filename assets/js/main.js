function navLinksSmooth() {
  const navLinks = document.querySelectorAll('.nav-link');
  for (let n in navLinks) {
    if (navLinks.hasOwnProperty(n)) {
      navLinks[n].addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(navLinks[n].hash)
          .scrollIntoView({
            behavior: "smooth",
          });
      });
    }
  }
}

function scrollBotton(){
  const idVote = document.getElementById('clickVote');
  idVote.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(idVote.hash)
      .scrollIntoView({
        behavior: "smooth",
      });
  });

}

function spyScrolling() {
  const sections = document.querySelectorAll('.article');

  window.onscroll = () => {

    const scrollHeader = document.documentElement.scrollTop;
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("nav").classList.add("fixed-top");
    } else {
      document.getElementById("nav").classList.remove("fixed-top");
    }

    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    for (let s in sections)
      if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPosition) {
        const id = sections[s].id;
        document.querySelector('.active').classList.remove('active');
        document.querySelector(`a[href*=${ id }]`).parentNode.classList.add('active');
      }
  }
}

function onclickVote() {
  const btnVotes = document.querySelectorAll('.btn-heart');
  for (let i = 0; i < btnVotes.length; i++) {
    let counter = 0;
    counter++;
    let isChecked = false;
    btnVotes[i].addEventListener('click', () => {
      console.log(btnVotes[i]);
      console.log(btnVotes[i].childNodes[1]);
      isChecked = !isChecked;
      isChecked ? btnVotes[i].childNodes[3].textContent = counter--  : btnVotes[i].childNodes[3].textContent = counter++ ;
      isChecked ? btnVotes[i].style.color = "#e59fa4"  : btnVotes[i].style.color = "#7d7f80" ;
      isChecked ? btnVotes[i].childNodes[1].style.fill = "#e59fa4"  : btnVotes[i].childNodes[1].style.fill = "#7d7f80" ;
    });
  }
}

function onCLickIngredients(){
  const btnIngredients = document.querySelectorAll('.btn-ingredients');
  for (let i = 0; i < btnIngredients.length; i++) {
    btnIngredients[i].addEventListener('click', () => {
      btnIngredients[i].classList.toggle('checked');
    });
  }
}

onCLickIngredients()
navLinksSmooth();
spyScrolling();
onclickVote();
scrollBotton();