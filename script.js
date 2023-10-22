// Add a click event listener to each FAQ question
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle("active");
    });
});
