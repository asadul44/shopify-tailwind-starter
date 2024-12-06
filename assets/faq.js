document.querySelectorAll('.faq-item summary').forEach(item => {
    item.addEventListener('click', () => {
        const faqItem = item.parentElement;
        const faqContent = faqItem.querySelector('.faq-content');

        faqItem.classList.toggle('open');
        faqContent.style.display = faqContent.style.display === 'block' ? 'none' : 'block';
    });
});