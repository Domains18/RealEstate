alert('Welcome to Keevadis Agencies');
//changing navigation bar styles on scrolls

window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//show answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open');
//change icon
        const icon = faq.querySelector('.faq__icon i');
        if(icon.className=== 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } 
        else{
            icon.className = "uil uil-plus";
        }
    })
})














