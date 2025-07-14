import images from '@/assets/imgs';

const skills = [
    {
        time: 'future',
        title: 'unKnow',
        tags: ['developer', 'Vietnam', 'Indie Hacker'],
        description: 'Probably working at a certain company in Vietname or Remote devoloper',
    },
    {
        time: '2025 ~ future',
        title: 'unKnow',
        tags: ['developer', 'Korean'],
        description: 'Probably working at a certain company in Korean or somewhere',
    },
    {
        time: '2021 ~ 2025',
        title: 'SSU Student',
        tags: ['developer', 'university'],
        description: '4 years for personal development, getting used to class exercises, practicing teamwork skills',
    },
];

const techList = [
    {
        logo: images.reactLogo,
        title: 'Reactjs',
        tag: 'Front-end',
    },
    {
        logo: images.springLogo,
        title: 'Spring Boot',
        tag: 'Backend',
    },
    {
        title: 'NodeJs',
        logo: images.nodejsLogo,
        tag: 'Backend',
    },
    {
        logo: images.dockerLogo,
        title: 'Docker',
        tag: 'DevOps',
    },
    {
        logo: images.sqlLogo,
        title: 'SQL',
        tag: 'Database',
    },
];

const links = {
    fb: 'https://www.facebook.com/profile.php?id=100015195702096',
    gh: 'https://github.com/dt313',
    blog: 'https://reactjs-blog-beta.vercel.app',
    gmail: 'dt313.dev21@gmail.com',
};

const projects = [
    {
        title: 'Retro Chat App',
        link: 'https://retro-chat-app-0407.vercel.app/',
        description:
            'Welcome to Retro Chat! This is a modern real-time messaging app with a nostalgic retro-style interface. Enjoy features like Google/GitHub login, group and private chats, instant messaging, emoji reactions, media sharing, notifications, and even audio/video calls. Stay connected with both style and simplicity! - (Note: The app is deployed on a free platform, so it may take a few moments to load.)',
    },

    {
        title: 'Bagoftech Blog',
        link: 'https://bagoftech.vercel.app/',
        description:
            'Welcome to Bagoftech Blog! This is a platform where I share my insights, experiences, and the latest trends in technology and programming. Join me as we dive deep into various tech topics and expand our knowledge together. Thank you for stopping by! - (Note: The app is deployed on a free platform, so it may take a few moments to load.)',
    },
    {
        title: 'Wedding Invitation',
        link: 'https://thiep-cuoi-hung-thuy.vercel.app/?name=Danh%20Tuan',
        description:
            'Welcome to our Wedding Invitation page! Here, you can view all the details about our upcoming celebration, RSVP with ease, and share in the joy of this special occasion. We look forward to celebrating with you!',
    },
    {
        title: 'Personal Todolist',
        link: 'https://todo-app-0003.netlify.app',
        description:
            'Welcome to the Todo List App! Stay organized and efficient by managing your tasks effortlessly. With this app, you can create, prioritize, and track your to-do list anytime and anywhere. Start boosting your productivity today!',
    },
];

export { skills, techList, links, projects };
