import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HandIcon from '@/assets/icons/hand';
import Plus from '@/assets/icons/plus';
import images from '@/assets/imgs';
import { gallery } from '@/assets/imgs';
import RightArrow from '@/assets/icons/rarrow';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '@/context/theme-context';

import useTitle from '@/hook/useTitle';
import InfiniteMenu from '@/components/infiniteMenu';

const cx = classNames.bind(styles);
const items = [
    {
        image: gallery.gallery1,
        link: '/about',
        title: 'Drag',
        description: 'Thử click, kéo, thả ở đây !',
    },
    {
        image: gallery.gallery2,
        link: '/about',
        title: 'Drag',
        description: 'Thử click, kéo, thả ở đây !',
    },
    {
        image: gallery.gallery3,
        link: '/about',
        title: 'Drag',
        description: 'Thử click, kéo, thả ở đây !',
    },
    {
        image: gallery.gallery4,
        link: '/about',
        title: 'Drag',
        description: 'Thử click, kéo, thả ở đây !',
    },
    {
        image: gallery.gallery5,
        link: '/about',
        title: 'Drag',
        description: 'Thử click, kéo, thả ở đây !',
    },
    {
        image: gallery.gallery6,
        link: '/about',
        title: 'Drag',
        description: 'Thử click, kéo, thả ở đây !',
    },
    {
        image: gallery.gallery7,
        link: '/about',
        title: 'Drag',
        description: 'Thử click, kéo, thả ở đây !',
    },
];

function Home() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const { theme, handleChangeTheme } = useContext(ThemeContext);
    useTitle('Danh Tuấn | Home');

    const navigator = useNavigate();
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('thumnail-ss')}>
                    <InfiniteMenu items={items} theme="light" />
                </div>
                <div
                    className={cx('about-ss')}
                    onMouseEnter={() => {
                        cursorChangeHandler('about');
                        handleChangeTheme('light');
                    }}
                    onMouseLeave={() => {
                        cursorChangeHandler('');
                        handleChangeTheme('dark');
                    }}
                    onClick={() => {
                        navigator('/about');
                        handleChangeTheme('dark');
                    }}
                >
                    <div className={cx('animation-text')}>
                        <p className={cx('title')}> Nguyen Danh Tuan</p>
                        <p className={cx('animation-title')}>Web Devoloper</p>
                    </div>
                    <span className={cx('plus')}>
                        <Plus className={cx('icon')} />
                    </span>
                </div>
            </div>
            <div className={cx('right')}>
                <div
                    className={cx('contact-ss')}
                    onMouseEnter={() => {
                        cursorChangeHandler('contact');
                    }}
                    onMouseLeave={() => {
                        cursorChangeHandler('');
                    }}
                    onClick={() => navigator('/contact')}
                >
                    <span className={cx('hand')}>
                        <HandIcon className={cx('icon')} />
                    </span>
                    <p className={cx('contact-text')}>
                        I am a fourth-year student at Soongsil University (SSU) in Seoul, South Korea's capital. It's
                        nice if we can cooperate together
                    </p>
                </div>
                <div
                    className={cx('work-ss')}
                    onMouseEnter={() => cursorChangeHandler('work')}
                    onMouseLeave={() => cursorChangeHandler('')}
                    onClick={() => navigator('/work')}
                >
                    <div className={cx('animation-text')}>
                        <div className={cx('present')}>
                            <span className={cx('title')}>Work</span>
                            <span className={cx('arrow')}>
                                <RightArrow className={cx('icon')} />
                            </span>
                        </div>
                        <div className={cx('animation')}>
                            <span className={cx('title')}>Work</span>
                            <span className={cx('arrow')}>
                                <RightArrow className={cx('icon')} />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
