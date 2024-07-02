import routes from '@/config/routes';
import DefaultLauout from '@/layout/DefaultLayout/DefaultLayout';
import About from '@/page/about/About';
import Contact from '@/page/contact/Contact';
import Home from '@/page/home/Home';
import Work from '@/page/work/Work';

const publicRoutes = [
    {
        path: routes.home,
        component: Home,
    },
    {
        path: routes.work,
        component: Work,
    },
    {
        path: routes.about,
        component: About,
    },
    {
        path: routes.contact,
        component: Contact,
    },
];

export { publicRoutes };
