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
        title: 'Personal Blog',
        link: 'https://reactjs-blog-beta.vercel.app',
        description:
            "Welcome to my blog! This is a space where I share stories, thoughts,\
             and experiences about technology and programming. Let's explore and learn together through each post.Thank you so much for visiting!",
    },
    {
        title: 'Todo list app',
        link: 'https://todo-app-0003.netlify.app',
        description:
            'Welcome to TodoApp! This is where you can efficiently manage and organize your tasks. \
            With TodoApp, you can easily create, prioritize, and track your tasks from anywhere.\
             Start organizing your life smarter and more effectively right now!',
    },
];
export { skills, techList, links, projects };
