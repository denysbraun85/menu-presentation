// Отримуємо поточну дату
const today = new Date();
const dateString = today.toLocaleDateString(); // формат YYYY-MM-DD
fetch('schedule.json')
    .then(response => response.json())
    .then(data => {
        // Отримуємо план на сьогодні
        const plan = data[dateString];
        if (plan) {
            console.log(plan);
            // document.getElementById('title').innerText = plan.title;
            document.getElementById('content').innerHTML =
`
            <div class="menu__slide" data-meal="breakfast" data-side="right">
                <img class="menu__img" src="img/left-side-img/1-left-min.jpg" alt="1-left-min"/>
                <div class="menu__description">
                    <div class="menu__header-block">
                        <div class="menu__diet">${plan.diet}</div>
                        <div class="menu__date">
                            <span class="menu__date-day">${dateString}</span>
                            <span class="menu__date-data">${plan.day}</span>
                        </div>
                    </div>
                    <div class="menu__title">${plan.breakfast.name}</div>
                    <ul class="menu__meals-block">
                        <li class="menu__meals-item">
                            <p class="menu__meals-name">${plan.breakfast.dish_1.name}</p>
                            <span class="menu__meals-output">${plan.breakfast.dish_1.output}</span>
                        </li>
                        <li class="menu__meals-item">
                            <p class="menu__meals-name">${plan.breakfast.dish_2.name}</p>
                            <span class="menu__meals-output">${plan.breakfast.dish_2.output}</span>
                        </li>
                        <li class="menu__meals-item">
                            <p class="menu__meals-name">${plan.breakfast.dish_3.name}</p>
                            <span class="menu__meals-output">${plan.breakfast.dish_3.output}</span>
                        </li>
                    </ul>
                    <ul class="menu__footer-block">
                        <li class="menu__responsible-item">
                            <p class="menu__meals-name">${plan.responsive.chief_position}</p>
                            <span class="menu__meals-output">${plan.responsive.chief_name}</span>
                        </li>
                    </ul>
                </div>
            </div>

`
        } else {
            document.getElementById('content').innerText = 'На сьогодні немає плану.';
        }
    })
    .catch(error => {
        console.error('Помилка завантаження даних:', error);
        document.getElementById('content').innerText = 'Сталася помилка при завантаженні даних.';
    });