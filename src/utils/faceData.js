import webdesign from "../assets/png/services/webdesign.png"
import graphicdesign from "../assets/png/services/graphic.png"
import frontend from "../assets/png/services/frontend.png"
import backend from "../assets/png/services/backend.png"
import fullstack from "../assets/png/services/fullstack.png"
import smm from "../assets/png/services/smm.png"
import android from "../assets/png/services/android.png"
import video from "../assets/png/services/videoM.jpg"
import python from "../assets/png/services/python.png"
import pythonLongo from "../assets/png/services/pythonlogo.png"

const question = 'ЧТО ВХОДИТ В '

export const services = [
    {
        headerName: 'Web-design',
        headerInfo: 'Веб-дизайнер опирается на пожелания аудитории, проектируя сайты и приложения так, чтобы помочь пользователям сделать, что они хотят — например, купить товар, узнать новости или пообщаться с друзьями. Он — самый настоящий проводник клиента в сложном мире бизнеса.',
        headerImg: webdesign,
        linkTitle: 'Web-design',
        linkInfo: ['Проектирование и визуализация продуктов, их макетов и прототипов.', `
        *Визуализация прототипа,
        *Проектирование сайта или приложения
        *Взаимодействие с пользователем.`],
        linkPath: '/webdesign',
        aboutTitle: `${question} Web-design `,
        aboutInfo: '"Постановка целей и задач сайта Создание, проработка технического задания (ТЗ) на разработку сайтаПрототипирование Создание макета дизайна сайта Верстка; Программирование;       Наполнение контентом',
        featureTitle: 'использовал',
        features: 'Фигма-кросс-платформенный онлайн-сервис для дизайнеров интерфейсов и веб-разработчиков. Разработка интерфейсов происходит в онлайн-приложении.'
    },
    {
        headerName: 'Graphic-design',
        headerInfo: 'Графические дизайнеры помогают организовывать визуальную информацию так, чтобы она дошла до потребителя. Дорожные знаки, оформление учебника, фирменный бланк — именно дизайнер-график решает проблему точного и своевременного сообщения информации. Грамотное оформление текста помогает сделать его легким для восприятия.',
        headerImg: graphicdesign,
        linkTitle: 'Graphic-design',
        linkInfo: [` Именно графический дизайн может помочь продать идею или продукт. Создание фирменного стиля компании, брендинга, упаковки в последнее время все более востребовано на рынке.`],
        linkPath: '/graphicdesign',
        aboutTitle: `${question}Graphic-design`,
        aboutInfo: 'Это программа для создания векторной графики.Многофункциональной программой пользуются художники и дизайнеры в различных областях.',
        featureTitle: 'использовал',
        features: 'Создание логотипа; Брэндбук;        Визитки;        SMM пост;        Редактирование фотографий;      Коллаж; Илюстрации;'
    },
    {
        headerName: 'Front-end',
        headerInfo: 'Фронтенд разработчик работает над тем, чтобы на сайте каждая кнопочка, иконка, текст и окно не только стояли на своем месте, не перекрывали друг друга и выглядели целостно (это веб-верстка), но и чтобы они выполняли свое прямое предназначение — производили какие-то действие (например, чтобы кнопка “купить” открывала корзину, а “play” — запускала воспроизведение фильма или музыки).',
        headerImg: frontend,
        linkTitle: 'Front-end',
        linkInfo: [`   FrontEnd разработчик создает видимую для пользователя часть веб-страницы и его главная задача – точно передать в верстке то, что создал дизайнер, а также реализовать пользовательскую логику.`],
        linkPath: '/frontend',
        aboutTitle: `${question} Front-end`,
        aboutInfo: 'Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.',
        featureTitle: 'Язык программирования',
        features: 'JavaScript, HTML,  CSS, Sass/SCSS, jQuery, LESS, AngularJS, Bootstrap, Prototype, Ember.js, Backbone, React.js, Grunt Gulp'
    },
    {
        headerName: 'Back-end',
        headerInfo: 'Программно-аппаратная часть сервиса. Это набор средств, с помощью которых происходит реализация логики веб-сайта. Это то, что скрыто от наших глаз, т. е. происходит вне компьютера и браузера.',
        headerImg: backend,
        linkTitle: 'Back-end',
        linkInfo: [` Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.`],
        linkPath: '/backend',
        aboutTitle: `${question}Back-end`,
        aboutInfo: 'Как только вы введёте запрос на странице поисковика и нажмёте клавишу «Ввод», frontend закончится и начнётся backend. Ваш запрос отправится на сервер Яндекса или Google, т. е. по месту расположения алгоритмов поиска. Именно там и происходит вся «магия». Но вот, на мониторе появляются данные, которые вы запрашивали, — это происходит возвращение во frontend.',
        featureTitle: 'Язык программирования',
        features: 'PHP, Ruby, Python, Java, Node.js'
    },
    {
        headerName: 'Full-stack',
        headerInfo: '  Full-stack development encompasses both front and back end development, as well as server, network, and hosting environments. Sometimes, the lines are a bit blurred between the responsibilities of a front and a back end developer, which caused a need for ‘full-stack development,’ a term created by Facebook.',
        headerImg: fullstack,
        linkTitle: 'Full-stack',
        linkInfo: [` Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.`],
        linkPath: '/fullstack',
        aboutTitle: `${question} Full-stack`,
        aboutInfo: 'Many developers find themselves making the transition to ‘full-stack’ after having worked in a number of different development positions because of the many different areas of knowledge required of a great full-stack developer. Full-stack can be a difficult transition to make since it requires a great deal of in-depth knowledge in many different areas. For instance, full-stack may have at one time encompassed knowledge of HTML5/CSS2, Amazon, PHP/Python/Ruby, and MySQL, as pictured below',
        featureTitle: 'Язык программирования',
        features: 'JavaScript, HTML,  CSS, Sass/SCSS, jQuery, LESS, AngularJS, Bootstrap, Prototype, Ember.js, Backbone, React.js, Grunt Gulp,PHP, Ruby, Python, Java'
    },
    {
        headerName: 'SMM',
        headerInfo: ' SMM (social media marketing)[1] — один из инструментов интернет-маркетинга. Суть SMM — привлечение клиентов из социальных сетей. По статистике Marketing Sherpa, 95% людей от 18 до 34 лет удобнее всего следить за брендом и взаимодействовать с ним именно через соцсети. С этим и связан большой спрос на SMM-специалистов: почти каждая компания ведёт соцсети. Для многих брендов это единственный канал продвижения в интернете.',
        headerImg: smm,
        linkTitle: 'SMM',
        linkInfo: [` Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.`],
        linkPath: '/smm',
        aboutTitle: `${question} SMM`,
        aboutInfo: 'Social media marketing is the use of social media platforms to connect with your audience to build your brand, increase sales, and drive website traffic. This involves publishing great content on your social media profiles, listening to and engaging your followers, analyzing your results, and running social media advertisements. The major social media platforms (at the moment) are Facebook, Instagram, Twitter, LinkedIn, Pinterest, YouTube, and Snapchat.',
        featureTitle: 'Программы',
        features: 'Facebook, Instagramm , YouTube, Twitter , Telegram '
    },
    {
        headerName: 'Android Mobile Development',
        headerInfo: 'Android is a mobile operating system based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the Open Handset Alliance and commercially sponsored by Google.',
        linkTitle: 'Android Mobile Development',
        headerImg: android,
        linkInfo: [` Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.`],
        linkPath: '/android',
        aboutTitle: `${question} Android Mobile Development`,
        aboutInfo: 'Android is a popular computing platform based on the Linux® operating system. The initial commercial version of Android hit the market in 2008 in the form of a mobile phone platform, back when the most popular cell phone for a business user was the BlackBerry, when the iPhone was beginning to make meaningful waves across all sectors, and when the majority of phone users were still tapping out texts from a flip phone.',
        featureTitle: 'Язык программирования',
        features: 'Java , Flutter, Python'
    },
    {
        headerName: 'Motion-graphic',
        headerInfo: 'Motion graphic design, also known as motion design, is a subset of graphic design in that it uses graphic design principles in a filmmaking or video production context (or other temporally evolving visual media) through the use of animation or filmic techniques. Examples include the kinetic typography and graphics used in film and television opening sequences, and the spinning, three-dimensional station identification logos of some television channels. This art form has been around for decades, and has advanced in technical sophistication over time.',
        headerImg: video,
        linkTitle: 'Motion-graphic',
        linkInfo: [` Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.`],
        linkPath: '/video',
        aboutTitle: `${question}Motion-graphic`,
        aboutInfo: 'A motion graphic designer may be a person trained in traditional graphic design who has learned to integrate temporally evolving visual media into their existing design knowledge, though motion designers may also come from a filmmaking or animation background as these fields share a number of overlapping skills..',
        featureTitle: 'использовал',
        features: 'Animation ,Film title design,Motion graphics, Web design, Web television, User experience, Graphic design,Video editing, Adobe software'
    },
    {
        headerName: 'Python',
        headerInfo: 'Python — самый быстрорастущий язык программирования за последние несколько лет. Об этом говорит исследование StackOverflow за 2019 год. Давайте разберёмся, за что его любят разработчики и почему мы советуем начинающим программистам попробовать его в качестве первого языка.',
        headerImg: python,
        linkTitle: 'Python',
        linkInfo: [` Процесс программирования, конечной целью которого является разработка серверной части web-ресурса и ее объединение с пользовательской стороной.`],
        linkPath: '/python',
        aboutTitle: `${question} python`,
        aboutInfo: 'Python is powerful... and fast;    plays well with others; runs everywhere; is friendly & easy to learn; is Open. These are some of the reasons people who use Python would rather not use anything else.',
        featureTitle: 'использовал',
        features: 'Telegram Bot, Back-end , Front-end , Machine Learning ',
        img: pythonLongo
    },
]

export const headerForm = [
    {label: 'frontend', value: 'frontend'},
    {label: 'backend', value: 'backend'},
    {label: 'fullstack', value: 'fullstack'}
]