// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
// Carousel functionality
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;
    
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carouselContainer.style.transform = `translateX(${offset}%)`;
    }
    
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        updateCarousel();
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

// Dark Mode
    let darkmode = document.querySelector('#darkmode');
        
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }    

    // Carousel function to handle the redirection when an image is clicked
    // function goToWebsite(url) {
    //     window.location.href = url;
    //   }

    //   let currentIndex = 0;
    //   const images = document.querySelectorAll('.carousel-images img');
    //   const totalImages = images.length;
      
    //   function nextImage() {
    //     currentIndex = (currentIndex + 1) % totalImages;
    //     updateCarousel();
    //   }
      
    //   function updateCarousel() {
    //     const offset = -currentIndex * 100;
    //     document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
    //   }
      
    //   // Optional: Auto-slide the carousel every 3 seconds
    //   setInterval(nextImage, 3000);  
