// Данные для курсов
const courses = [
    {
        id: 1,
        title: "Веб-разработка с нуля",
        category: "programming",
        description: "Полный курс по созданию современных веб-сайтов с использованием HTML, CSS и JavaScript.",
        price: 45000,
        duration: "3 месяца",
        level: "Начальный",
        students: 124,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Этот курс предназначен для начинающих веб-разработчиков, которые хотят освоить основы создания веб-сайтов. Вы изучите HTML для структуры, CSS для стилей и JavaScript для интерактивности. В конце курса вы создадите свой собственный проект.",
        syllabus: ["HTML5 и семантическая верстка", "CSS3, Flexbox и Grid", "JavaScript основы", "DOM манипуляции", "Адаптивный дизайн", "Основы Git", "Проект: личный сайт-портфолио"],
        teacherId: 1
    },
    {
        id: 2,
        title: "Python для начинающих",
        category: "programming",
        description: "Изучите один из самых популярных языков программирования с нуля.",
        price: 32000,
        duration: "2.5 месяца",
        level: "Начальный",
        students: 89,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Python — один из самых популярных языков программирования. На этом курсе вы изучите основы синтаксиса, структуры данных и напишете свои первые программы.",
        syllabus: ["Синтаксис Python", "Структуры данных", "Функции и модули", "Работа с файлами", "Основы ООП", "Популярные библиотеки", "Проект: консольное приложение"],
        teacherId: 2
    },
    {
        id: 3,
        title: "UI/UX дизайн",
        category: "design",
        description: "Освойте принципы создания удобных и красивых пользовательских интерфейсов.",
        price: 28000,
        duration: "3 месяца",
        level: "Начальный",
        students: 76,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Курс для тех, кто хочет научиться создавать современные пользовательские интерфейсы. Вы освоите Figma, узнаете принципы UX-исследований и научитесь проектировать интерфейсы, которые решают проблемы пользователей.",
        syllabus: ["Основы UX-исследований", "Работа в Figma", "Прототипирование", "Визуальный дизайн", "Юзабилити-тестирование", "Дизайн-системы", "Проект: мобильное приложение"],
        teacherId: 3
    },
    {
        id: 4,
        title: "Цифровой маркетинг",
        category: "marketing",
        description: "Освойте современные инструменты продвижения бизнеса в интернете.",
        price: 39000,
        duration: "3 месяца",
        level: "Средний",
        students: 112,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Курс для предпринимателей и маркетологов, которые хотят научиться эффективно продвигать бизнес в цифровой среде. Вы освоите SEO, контекстную рекламу, SMM и аналитику.",
        syllabus: ["SEO-оптимизация", "Контекстная реклама", "Социальные сети", "Email-маркетинг", "Аналитика", "Контент-маркетинг", "Проект: маркетинг-план"],
        teacherId: 4
    },
    {
        id: 5,
        title: "Английский для IT-специалистов",
        category: "language",
        description: "Специализированный курс английского языка для работы в IT-сфере.",
        price: 18000,
        duration: "4 месяца",
        level: "Все уровни",
        students: 156,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Курс предназначен для IT-специалистов, которые хотят улучшить свой английский для работы в международных компаниях, чтения документации и общения с зарубежными коллегами.",
        syllabus: ["Техническая лексика", "Чтение документации", "Деловая переписка", "Подготовка к собеседованию", "Коммуникация в команде", "Презентация проектов", "Проект: техническое собеседование"],
        teacherId: 5
    },
    {
        id: 6,
        title: "Мобильная разработка на Flutter",
        category: "programming",
        description: "Создание кроссплатформенных мобильных приложений на Flutter.",
        price: 32000,
        duration: "4 месяца",
        level: "Средний",
        students: 67,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        fullDescription: "Flutter позволяет создавать приложения для iOS и Android из единой кодовой базы. На курсе вы научитесь создавать красивые и производительные приложения.",
        syllabus: ["Основы Dart", "Виджеты Flutter", "Навигация", "Работа с API", "State Management", "Публикация в магазины", "Проект: мобильное приложение"],
        teacherId: 1
    }
];

// Данные для преподавателей
const teachers = [
    {
        id: 1,
        name: "Александр Иванов",
        position: "Senior Frontend Developer",
        description: "Опыт работы в веб-разработке более 8 лет. Работал в крупных IT-компаниях. Специализируется на JavaScript, React и Vue.js.",
        experience: "8 лет",
        courses: ["Веб-разработка", "Мобильная разработка"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Мария Петрова",
        position: "Python Developer",
        description: "Backend-разработчик с фокусом на Python и Django. Участвовала в создании высоконагруженных систем.",
        experience: "6 лет",
        courses: ["Python для начинающих", "Алгоритмы и структуры данных"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b786d4d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "Дмитрий Сидоров",
        position: "UI/UX Designer",
        description: "Дизайнер с более чем 7-летним опытом. Создавал интерфейсы для банков, стартапов и корпоративных приложений.",
        experience: "7 лет",
        courses: ["UI/UX дизайн", "Веб-дизайн"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Елена Кузнецова",
        position: "Digital Marketing Specialist",
        description: "Маркетолог с 10-летним опытом. Помогла более 50 компаниям увеличить продажи через digital-каналы.",
        experience: "10 лет",
        courses: ["Цифровой маркетинг", "SMM-продвижение"],
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 5,
        name: "Ольга Смирнова",
        position: "English Teacher",
        description: "Преподаватель английского с международной сертификацией CELTA. Специализируется на техническом английском.",
        experience: "12 лет",
        courses: ["Английский для IT", "Деловой английский"],
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
];

// Глобальные переменные
let currentPage = 'home';
let currentFilter = 'all';

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация страницы
    initPage();
    
    // Инициализация навигации
    initNavigation();
    
    // Инициализация мобильного меню
    initMobileMenu();
    
    // Загрузка данных на главную страницу
    loadPopularCourses();
    
    // Загрузка всех курсов
    loadAllCourses();
    
    // Загрузка преподавателей
    loadTeachers();
    
    // Инициализация формы
    initForm();
    
    // Инициализация счетчиков статистики
    initStatsCounter();
});

// Инициализация страницы
function initPage() {
    // Проверяем hash в URL для начальной загрузки страницы
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        switchPage(hash);
    } else {
        switchPage('home');
    }
}

// Инициализация навигации
function initNavigation() {
    // Обработка кликов по навигационным ссылкам
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
            
            // Закрываем мобильное меню если оно открыто
            const mobileMenu = document.querySelector('.mobile-menu');
            mobileMenu.classList.remove('active');
        });
    });
    
    // Обработка кнопок "назад" на странице курса
    const backBtns = document.querySelectorAll('.back-btn');
    backBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            switchPage(pageId);
        });
    });
}

// Инициализация мобильного меню
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const closeMobileMenuBtn = document.querySelector('.close-mobile-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-content .nav-link');
    
    // Открытие мобильного меню
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });
    
    // Закрытие мобильного меню
    closeMobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });
    
    // Закрытие меню при клике на ссылку
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });
    
    // Закрытие меню при клике вне его области
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Переключение между страницами
function switchPage(pageId) {
    // Обновляем текущую страницу
    currentPage = pageId;
    
    // Обновляем URL без перезагрузки страницы
    window.history.pushState({}, '', `#${pageId}`);
    
    // Скрываем все страницы
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Показываем выбранную страницу
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
    
    // Обновляем активную ссылку в навигации
    updateActiveNavLink(pageId);
    
    // Если перешли на страницу каталога, применяем текущий фильтр
    if (pageId === 'courses') {
        applyFilter(currentFilter);
    }
    
    // Прокрутка к верху страницы
    window.scrollTo(0, 0);
}

// Обновление активной ссылки в навигации
function updateActiveNavLink(pageId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
        }
    });
}

// Загрузка популярных курсов на главную страницу
function loadPopularCourses() {
    const container = document.getElementById('popular-courses');
    if (!container) return;
    
    // Берем первые 3 курса
    const popularCourses = courses.slice(0, 3);
    
    container.innerHTML = '';
    popularCourses.forEach(course => {
        const courseCard = createCourseCard(course, false);
        container.appendChild(courseCard);
    });
    
    // Добавляем обработчики событий для кнопок "Подробнее"
    addCourseDetailHandlers();
}

// Загрузка всех курсов на страницу каталога
function loadAllCourses() {
    const container = document.getElementById('courses-list');
    if (!container) return;
    
    // Инициализация фильтров
    initFilters();
    
    // Отображаем все курсы
    renderCourses(courses, container);
    
    // Добавляем обработчики событий для кнопок "Подробнее"
    addCourseDetailHandlers();
}

// Инициализация фильтров курсов
function initFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Удаляем активный класс у всех кнопок
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс к нажатой кнопке
            this.classList.add('active');
            
            // Получаем значение фильтра
            const filterValue = this.getAttribute('data-filter');
            currentFilter = filterValue;
            
            // Применяем фильтр
            applyFilter(filterValue);
        });
    });
}

// Применение фильтра к курсам
function applyFilter(filterValue) {
    const container = document.getElementById('courses-list');
    if (!container) return;
    
    let filteredCourses;
    
    if (filterValue === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.category === filterValue);
    }
    
    // Очищаем контейнер и рендерим отфильтрованные курсы
    container.innerHTML = '';
    renderCourses(filteredCourses, container);
    
    // Добавляем обработчики событий для кнопок "Подробнее"
    addCourseDetailHandlers();
}

// Рендеринг курсов в контейнер
function renderCourses(coursesArray, container) {
    if (coursesArray.length === 0) {
        container.innerHTML = '<p class="no-courses">Курсы по выбранной категории пока не добавлены</p>';
        return;
    }
    
    coursesArray.forEach(course => {
        const courseCard = createCourseCard(course, true);
        container.appendChild(courseCard);
    });
}

// Создание карточки курса
function createCourseCard(course, showCategory = true) {
    const card = document.createElement('div');
    card.className = 'course-card';
    card.setAttribute('data-id', course.id);
    
    const categoryClass = getCategoryClass(course.category);
    
    card.innerHTML = `
        <div class="course-image">
            <div class="category-badge ${categoryClass}">${getCategoryName(course.category)}</div>
        </div>
        <div class="course-content">
            ${showCategory ? `<div class="course-category">${getCategoryName(course.category)}</div>` : ''}
            <h3 class="course-title">${course.title}</h3>
            <p class="course-description">${course.description}</p>
            <div class="course-info">
                <div>
                    <div class="course-price">${formatPrice(course.price)} ₽</div>
                    <div class="course-duration">${course.duration}</div>
                </div>
                <div class="course-rating">
                    <i class="fas fa-star"></i> ${course.rating}
                </div>
            </div>
            <button class="btn btn-primary course-btn" data-id="${course.id}">Подробнее</button>
        </div>
    `;
    
    // Устанавливаем фоновое изображение
    const courseImage = card.querySelector('.course-image');
    courseImage.style.backgroundImage = `url('${course.image}')`;
    courseImage.style.backgroundSize = 'cover';
    courseImage.style.backgroundPosition = 'center';
    
    return card;
}

// Загрузка страницы отдельного курса
function loadCourseDetail(courseId) {
    const course = courses.find(c => c.id === parseInt(courseId));
    if (!course) return;
    
    const teacher = teachers.find(t => t.id === course.teacherId);
    
    const container = document.getElementById('course-detail-content');
    if (!container) return;
    
    container.innerHTML = `
        <div class="course-detail-header">
            <div class="course-detail-image">
                <div class="category-badge ${getCategoryClass(course.category)}">${getCategoryName(course.category)}</div>
            </div>
            <div class="course-detail-info">
                <div class="course-detail-category">${getCategoryName(course.category)}</div>
                <h1 class="course-detail-title">${course.title}</h1>
                <p>${course.fullDescription}</p>
                <div class="course-meta">
                    <div><i class="fas fa-clock"></i> ${course.duration}</div>
                    <div><i class="fas fa-signal"></i> ${course.level}</div>
                    <div><i class="fas fa-users"></i> ${course.students} студентов</div>
                    <div><i class="fas fa-star"></i> ${course.rating} рейтинг</div>
                </div>
                <div class="course-detail-price">${formatPrice(course.price)} ₽</div>
                <button class="btn btn-primary course-detail-btn" id="enroll-btn">Записаться на курс</button>
            </div>
        </div>
        
        <div class="course-detail-description">
            <h3>О курсе</h3>
            <p>${course.fullDescription}</p>
            
            <h3>Программа курса</h3>
            <div class="course-syllabus">
                <ul>
                    ${course.syllabus.map(item => `<li>${item}</li>`).join('')}
                </ul>
            </div>
            
            <h3>Преподаватель</h3>
            ${teacher ? `
            <div class="course-teacher">
                <div class="teacher-info">
                    <div class="teacher-photo-small">
                        <img src="${teacher.image}" alt="${teacher.name}">
                    </div>
                    <div>
                        <h4>${teacher.name}</h4>
                        <p>${teacher.position}</p>
                        <p>Опыт работы: ${teacher.experience}</p>
                    </div>
                </div>
            </div>
            ` : ''}
        </div>
    `;
    
    // Устанавливаем фоновое изображение
    const courseImage = container.querySelector('.course-detail-image');
    courseImage.style.backgroundImage = `url('${course.image}')`;
    courseImage.style.backgroundSize = 'cover';
    courseImage.style.backgroundPosition = 'center';
    
    // Добавляем обработчик для кнопки записи
    const enrollBtn = document.getElementById('enroll-btn');
    if (enrollBtn) {
        enrollBtn.addEventListener('click', function() {
            alert(`Вы успешно записались на курс "${course.title}"! Мы свяжемся с вами в ближайшее время.`);
        });
    }
    
    // Переключаемся на страницу курса
    switchPage('course-detail');
}

// Добавление обработчиков для кнопок "Подробнее" в карточках курсов
function addCourseDetailHandlers() {
    const courseButtons = document.querySelectorAll('.course-btn');
    courseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const courseId = this.getAttribute('data-id');
            loadCourseDetail(courseId);
        });
    });
}

// Загрузка преподавателей
function loadTeachers() {
    const container = document.getElementById('teachers-list');
    if (!container) return;
    
    container.innerHTML = '';
    teachers.forEach(teacher => {
        const teacherCard = createTeacherCard(teacher);
        container.appendChild(teacherCard);
    });
}

// Создание карточки преподавателя
function createTeacherCard(teacher) {
    const card = document.createElement('div');
    card.className = 'teacher-card';
    
    card.innerHTML = `
        <div class="teacher-photo">
            <img src="${teacher.image}" alt="${teacher.name}">
        </div>
        <h3 class="teacher-name">${teacher.name}</h3>
        <p class="teacher-position">${teacher.position}</p>
        <p class="teacher-experience"><i class="fas fa-briefcase"></i> Опыт: ${teacher.experience}</p>
        <p class="teacher-description">${teacher.description}</p>
        <div class="teacher-courses">
            <strong>Ведет курсы:</strong> ${teacher.courses.join(', ')}
        </div>
    `;
    
    return card;
}

// Инициализация формы
function initForm() {
    const form = document.getElementById('application-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Получаем данные формы
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const course = document.getElementById('course').value;
        const message = document.getElementById('message').value;
        
        // В реальном приложении здесь был бы AJAX-запрос к серверу
        // Для демонстрации просто показываем сообщение
        alert(`Спасибо, ${name}! Ваша заявка успешно отправлена. Мы свяжемся с вами по телефону ${phone} в ближайшее время.`);
        
        // Очищаем форму
        form.reset();
    });
}

// Инициализация счетчиков статистики
function initStatsCounter() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-count'));
                    animateCounter(stat, target);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Анимация счетчика
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 20);
}

// Вспомогательные функции
function getCategoryName(category) {
    const categories = {
        'programming': 'Программирование',
        'design': 'Дизайн',
        'marketing': 'Маркетинг',
        'language': 'Языки'
    };
    
    return categories[category] || category;
}

function getCategoryClass(category) {
    const classes = {
        'programming': 'programming-badge',
        'design': 'design-badge',
        'marketing': 'marketing-badge',
        'language': 'language-badge'
    };
    
    return classes[category] || '';
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Добавляем стили для бейджей категорий
const style = document.createElement('style');
style.textContent = `
    .category-badge {
        position: absolute;
        top: 15px;
        left: 15px;
        padding: 5px 12px;
        border-radius: 20px;
        color: white;
        font-weight: 600;
        font-size: 0.8rem;
    }
    
    .programming-badge {
        background-color: #3498db;
    }
    
    .design-badge {
        background-color: #9b59b6;
    }
    
    .marketing-badge {
        background-color: #e67e22;
    }
    
    .language-badge {
        background-color: #2ecc71;
    }
    
    .course-image, .course-detail-image {
        position: relative;
    }
    
    .course-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        margin: 15px 0;
        color: #666;
    }
    
    .course-meta div {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .course-teacher {
        margin-top: 20px;
        padding: 20px;
        background-color: #f8f9fa;
        border-radius: 8px;
    }
    
    .teacher-info {
        display: flex;
        align-items: center;
        gap: 20px;
    }
    
    .teacher-photo-small {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
    }
    
    .teacher-photo-small img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .no-courses {
        text-align: center;
        padding: 40px;
        color: #666;
        font-size: 1.2rem;
        grid-column: 1 / -1;
    }
    
    .course-rating {
        color: #f39c12;
        font-weight: 600;
    }
`;

document.head.appendChild(style);