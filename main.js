// Отримуємо поточну дату
const today = new Date();
const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
const dateString = today.toLocaleDateString('en-CA', options); // формат YYYY-MM-DD

fetch('schedule.json')
    .then(response => response.json())
    .then(data => {
        // Отримуємо план на сьогодні
        const plan = data[dateString];
        if (plan) {
            document.getElementById('title').innerText = plan.title;
            document.getElementById('content').innerText = plan.content;
        } else {
            document.getElementById('content').innerText = 'На сьогодні немає плану.';
        }
    })
    .catch(error => {
        console.error('Помилка завантаження даних:', error);
        document.getElementById('content').innerText = 'Сталася помилка при завантаженні даних.';
    });