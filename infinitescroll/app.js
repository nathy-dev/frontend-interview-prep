const API_BASE_URL = 'https://www.algoexpert.io/api/testimonials'
const PAGE_SIZE = 5
const testimonialContainer = document.getElementById('testimonal-container');

let afterId = null;

testimonialContainer.addEventListener('scroll', handleScroll)

async function fetchAndAppendTestimonails() {
    const url = createTestimonaialsUrl();
    const response = await fetch(url);
    const data = await response.json();
    const { testimonials, hasNext } = data;
    const fragment = document.createDocumentFragment();
    testimonials.forEach( ({message}) => {
        fragment.appendChild(createTestimonialElement(message))
    });
    testimonialContainer.appendChild(fragment);

    if(hasNext) {
        afterId = testimonals[testimonials.length -1].id;
    } else {
        testimonialContainer.removeEventListener('scroll', handleScroll)
    }
}

function createTestimonaialsUrl() {
    const url = new URL(API_BASE_URL)
    url.searchParams.set('limit', PAGE_SIZE);

    if(afterId != null) {
        url.searchParams.set('after'. afterId)
    }

    return url;
}

function createTestimonialElement(message) {
   const testimonial = document.createElement('p');
   testimonial.classList.add('testimonial');
   testimonial.textContent = message;
   return testimonial;
}

function handleScroll(e) {
    let window = e.target.value;
    const bottomSpaceRemaining = window.scrollHeight - window.scrollTop - window.clientHeight
    if(bottomSpaceRemaining > 0) return;
    fetchAndAppendTestimonails()
}
