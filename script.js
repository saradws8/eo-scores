
const links = document.querySelectorAll('.sidebar a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        sections.forEach(section => {
            section.classList.remove('active');
        });

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.classList.add('active');
        }
    });
});
function analyzeFeedbacks() {
    const input = document.getElementById("feedback-input").value.trim();
    const feedbacks = input.split("\n").filter(fb => fb.trim() !== "");

    const positiveWords = ["ممتاز", "رائع", "سريع", "جميل", "ممتازة", "جيد", "مذهل", "احترافي", "موثوق"];
    const negativeWords = ["سيئ", "بطيء", "تأخير", "رديء", "أسوأ", "غير راض", "مشكلة", "ضعيف", "غير جيد"];

    let positiveCount = 0;
    let negativeCount = 0;
    let neutralCount = 0;

    feedbacks.forEach(fb => {
        const lowerFB = fb.toLowerCase();

        const isPositive = positiveWords.some(word => lowerFB.includes(word));
        const isNegative = negativeWords.some(word => lowerFB.includes(word));

        if (isPositive && !isNegative) {
            positiveCount++;
        } else if (isNegative && !isPositive) {
            negativeCount++;
        } else {
            neutralCount++;
        }
    });

    const resultsDiv = document.getElementById("feedback-results");
    resultsDiv.innerHTML = `
        <h3>نتائج التحليل:</h3>
        <ul>
            <li>عدد الآراء المدخلة: ${feedbacks.length}</li>
            <li>آراء إيجابية: ${positiveCount}</li>
            <li>آراء سلبية: ${negativeCount}</li>
            <li>آراء محايدة/مختلطة: ${neutralCount}</li>
        </ul>
    `;
}

