import { LOCALES } from './locales';

export const messages = {
  [LOCALES.ENGLISH]: {
    MAIN: 'Main',
    SIGN_IN: 'Sign in',
    SIGN_UP: 'Sign up',
    LOG_OUT: 'Log out',
    NOT_A_MEMBER: 'Not a member yet?',
    PASS_PLACEHOLDER: 'Enter password...',
    EMAIL_PLACEHOLDER: 'Enter email...',
    NAME_PLACEHOLDER: 'Enter your name...',
    PAGE_NOT_FOUND: 'Page not found',
    WENT_WRONG: 'Ups, something went wrong...',
    HOME_PAGE: 'Home page',
    ALREADY_REGISTERED: 'Already on GraphiQL?',
    NAME_VALIDATION: 'Enter a name',
    NAME_MIN_LENGTH: 'Min length must be more than 2',
    NAME_MAX_LENGTH: 'Max length must be less than 20',
    NAME_PATTERN: 'Only letters, the first letter is capital',
    PASSWORD_VALIDATION: 'Enter a password',
    PASSWORD_MIN_LENGTH: 'Min length must be more than 8 symbols',
    PASSWORD_PATTERN: 'Must be al least 1 letter, 1 digit, 1 special character',
    EMAIL_VALIDATION: 'Enter a email',
    EMAIL_PATTERN: 'Invalid e-mail',
    TEAM: 'Team:',
    TEAM_MEET: 'Meet our team:',
    ARTEM_ROLE: 'Team lead',
    ARTEM_NAME: 'Artsem Rubashka',
    ARTEM_INFO:
      'Wrap error boundary, connect authentication with Firebase, add headers in request, wrap suspense and lazy loader',
    IRYNA_ROLE: 'Developer',
    IRYNA_NAME: 'Iryna Yehorova',
    IRYNA_INFO:
      'Connect GraphQL API, loading and visualization of the schema, connect and configure the editor, adaptive main page layout, smooth animation, creating a layout',
    MASHA_ROLE: 'Developer',
    MASHA_NAME: 'Masha Petrovskaya',
    MASHA_INFO:
      'Adaptive welcome page, header and footer, layout and validation of the form add localization',
    INTRO_API1: 'Welcome to the GraphQL playground for The PokeAPI!',
    INTRO_API2: 'Experiment with the GraphQL API by interacting with Pokemon data in real time.',
    INTRO_API3: 'You can get their names, types, abilities, statistics.',
    INTRO_API4:
      'Have questions? All answers can be found in the documentation right on the playground page.',
    INTRO_API5: 'Start testing the GraphQL API right now!',
    INTRO_REACT1: 'is the final project on the React Сourse',
    INTRO_REACT1_2: ' at RS School 2023Q1',
    INTRO_REACT2: 'React Сourse',
    INTRO_REACT3: 'includes:',
    INTRO_REACT4: 'Working with forms',
    INTRO_REACT5: 'Working with the server, AJAX requests',
    INTRO_REACT6: 'Routing in React',
    INTRO_REACT7: 'Redux and state management',
    INTRO_REACT8: 'Redux architecture: actions, reducers, store',
    INTRO_REACT9: 'React Hooks',
    INTRO_REACT10: 'Context API',
    INTRO_REACT11: 'Testing React applications',
    INTRO_REACT12: 'SSR (Server-Side Rendering)',
    INTRO_REACT13: 'Use Typescript',
    INTRO_REACT14: 'Stack in GraphiQL:',
    INTRO_HELP1: 'Query Examples',
    INTRO_HELP2: 'Get list of pokemons',
    INTRO_HELP3: 'Sample query:',
    INTRO_HELP4: 'Query params:',
    PLAYGROUND: 'Playground for',
    HELLO: 'Hello',
    DOC: 'Documentation',
    ERROR1: 'Something went wrong...',
    ERROR2: 'Please, try again later.',
    ERROR3: 'REFRESH',
    ERROR4: 'GO BACK',
  },
  [LOCALES.RUSSIAN]: {
    MAIN: 'Головна',
    SIGN_IN: 'Вхід',
    SIGN_UP: 'Регістрація',
    LOG_OUT: 'Вийти',
    NOT_A_MEMBER: 'Не зареєстровані?',
    PASS_PLACEHOLDER: 'Введіть пароль...',
    EMAIL_PLACEHOLDER: 'Введіть електронну пошту...',
    NAME_PLACEHOLDER: "Введіть Ваше ім'я...",
    PAGE_NOT_FOUND: 'Сторінка не знайдена',
    WENT_WRONG: 'Упс, щось пішло не так...',
    HOME_PAGE: 'На головну',
    ALREADY_REGISTERED: 'Вже зареєстровані?',
    NAME_VALIDATION: "Введіть ім'я",
    NAME_MIN_LENGTH: 'Мінімум 2 літери',
    NAME_MAX_LENGTH: 'Максимум 20 літер',
    NAME_PATTERN: 'Тільки літери, починаючи з великої',
    PASSWORD_VALIDATION: 'Введіть пароль',
    PASSWORD_MIN_LENGTH: 'Не менше 8 символів',
    PASSWORD_PATTERN: 'В паролі має бути хоча б 1 літера, 1 цифра, 1 спец. символ',
    EMAIL_VALIDATION: 'Введіть адресу електронної пошти',
    EMAIL_PATTERN: 'Не валідна адреса',
    TEAM: 'Команда:',
    TEAM_MEET: 'Наша команда:',
    ARTEM_ROLE: 'Лідер команди',
    ARTEM_NAME: 'Артем Рубашка',
    ARTEM_INFO:
      'Обернення в Error Boundary, підключення Firebase авторизації, додавання заголовків в запит до серверу, обернення компонентів в Suspense та додавання лінивого завантаження',
    IRYNA_ROLE: 'Розробниця',
    IRYNA_NAME: 'Ірина Єгорова',
    IRYNA_INFO:
      'Налаштування запитів до GraphQL сервера, завантаження та візуалізація GraphQL схеми, підключення та конфігурація редактора коду, адаптивна верстка головної сторінки та всіх її компонентів, додавання плавної анімації для блоків, створення макету додатка',
    MASHA_ROLE: 'Розробниця',
    MASHA_NAME: 'Маша Петровська',
    MASHA_INFO:
      'Адаптивна верстка сторінки привітання, хедера та футера, верстка і валідація форм, додавання локалізаціїї ',
    HELLO: 'Привіт',
    DOC: 'Документація',
    INTRO_API1: 'Ласкаво просимо до ігрового майданчикy GraphQL для PokeAPI!',
    INTRO_API2:
      'Експериментуйте з GraphQL API, взаємодіючи з даними Pokemon API в режимі реального часу.',
    INTRO_API3: 'Ви можете дізнатися їх імена, типи, здібності та статистику.',
    INTRO_API4: "З'явилися питання? Всі відповіді можно знайти в документації додатку",
    INTRO_API5: 'Почніть тестувати GraphQL API зараз!',
    INTRO_REACT1: 'фінальний проект курса React 2023Q1',
    INTRO_REACT1_2: 'в RS School',
    INTRO_REACT2: 'Курс React',
    INTRO_REACT3: 'про:',
    INTRO_REACT4: 'Роботу з формами',
    INTRO_REACT5: 'Роботу з сервером, AJAX запити',
    INTRO_REACT6: 'Роутінг в React',
    INTRO_REACT7: 'Redux та управління станом',
    INTRO_REACT8: "Архітектура Redux: дії, ред'юсери, сховище",
    INTRO_REACT9: 'React хуки',
    INTRO_REACT10: 'Контекстний API',
    INTRO_REACT11: 'Тестування додатків React',
    INTRO_REACT12: 'SSR (рендеринг на боці сервера)',
    INTRO_REACT13: 'Використання Typescript',
    INTRO_REACT14: 'Стек в GraphiQL:',
    INTRO_HELP1: 'Приклади запитів',
    INTRO_HELP2: 'Отримати перелік покемонів',
    INTRO_HELP3: 'Тіло запиту:',
    INTRO_HELP4: 'Параметри запиту:',
    PLAYGROUND: 'Playground for',
    ERROR1: 'Щось не так...',
    ERROR2: 'Будь ласка, спробуйте пізніше.',
    ERROR3: 'ОНОВИТИ',
    ERROR4: 'НАЗАД',
  },
};
