import images from '@/assets/imgs';

const skills = [
    {
        time: 'feature',
        title: 'unKnow',
        tags: ['devoloper', 'Vietnam'],
        description: 'Probably working at a certain company in Vietname or Remote devoloper',
    },
    {
        time: 'current-feature',
        title: 'unKnow',
        tags: ['devoloper', 'Korean'],
        description: 'Probably working at a certain company in Korean or somewhere',
    },
    {
        time: '2021-current',
        title: 'SSU Student',
        tags: ['devoloper', 'university'],
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
];

const links = {
    fb: 'https://www.facebook.com/profile.php?id=100015195702096',
    gh: 'https://github.com/dt313',
    blog: 'https://reactjs-blog-beta.vercel.app',
    gmail: 'dt313.dev21@gmail.com',
};

const projects = [
    {
        title: 'Bagoftech Blog',
        link: 'https://bagoftech.vercel.app/',
        description:
            'Welcome to Bagoftech Blog! This is a platform where I share my insights, experiences, and the latest trends in technology and programming. Join me as we dive deep into various tech topics and expand our knowledge together. Thank you for stopping by!',
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
