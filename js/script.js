// navbar
let hamburger = document.querySelector(".hamburger");
hamburger.onclick = function (){
    let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
};

// fade-in animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.baner-box img, .products .box, .center-header, .center-header-big, button, #shoes-table, th, td, .kon, form');
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        } else {
          entry.target.classList.remove('fade-in');
        }
      });
    }, { threshold: 0 }); 
  
    elementsToAnimate.forEach(element => observer.observe(element));
  
  });

// slider
let slideIndex = 0;
let slideInterval; 

showSlides(); 

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    if (slides.length === 0) {
      console.error("No slides found.");
      return;
    }
  
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }    
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    slides[slideIndex].style.display = "block";  
  
    if (slideInterval) {
      clearTimeout(slideInterval);
    }
    slideInterval = setTimeout(function() {
      plusSlides(1); 
    }, 3000); 
  }
  

// table
function fetchAndRenderShoes() {
    fetch('./data/shoes.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const shuffledShoes = shuffleArray(data.shoes);
        renderShoes(shuffledShoes);
      })
      .catch(error => {
        console.error('There was a problem fetching or parsing the shoes data:', error);
      });
  }
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  
  function renderShoes(shoesData) {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = '';
    
    shoesData.forEach(shoe => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${shoe.brand}</td>
        <td>${shoe.model}</td>
        <td>${shoe.price}</td>
        <td>${shoe.description}</td>
        <td>${shoe.popularity}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function sortByPopularity(shoesData, ascending = true) {
    return shoesData.slice().sort((a, b) => {
      if (ascending) {
        return a.popularity - b.popularity;
      } else {
        return b.popularity - a.popularity;
      }
    });
  }
  
  function filterByMostPopular() {
    fetch('./data/shoes.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const sortedShoes = sortByPopularity(data.shoes, false);
        renderShoes(sortedShoes);
      })
      .catch(error => {
        console.error('There was a problem fetching or parsing the shoes data:', error);
      });
  }
  
  function filterByLeastPopular() {
    fetch('./data/shoes.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const sortedShoes = sortByPopularity(data.shoes, true);
        renderShoes(sortedShoes);
      })
      .catch(error => {
        console.error('There was a problem fetching or parsing the shoes data:', error);
      });
  }
  
  window.onload = function() {
    fetchAndRenderShoes();
  };



  
  








