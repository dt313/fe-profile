import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import HandIcon from '@/assets/icons/hand';
import Plus from '@/assets/icons/plus';
import images from '@/assets/imgs';
import RightArrow from '@/assets/icons/rarrow';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';

const cx = classNames.bind(styles);

function Home() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('thumnail-ss')}>
                    <img className={cx('avatar')} src={images.avatar} />
                </div>
                <div
                    className={cx('about-ss')}
                    onMouseEnter={() => cursorChangeHandler('about')}
                    onMouseLeave={() => cursorChangeHandler('')}
                >
                    <p className={cx('title')}>Web Developer</p>
                    <span className={cx('plus')}>
                        <Plus className={cx('icon')} />
                    </span>
                </div>
            </div>
            <div className={cx('right')}>
                <div
                    className={cx('contact-ss')}
                    onMouseEnter={() => cursorChangeHandler('contact')}
                    onMouseLeave={() => cursorChangeHandler('')}
                >
                    <span className={cx('hand')}>
                        <HandIcon className={cx('icon')} />
                    </span>
                    <p className={cx('contact-text')}>
                        Hi, my name is Nguyen Danh Tuan. I am a skilled web developer specializing in ReactJS and
                        NodeJS. I have extensive experience building dynamic, high-performance web applications and am
                        passionate about creating seamless user experiences.
                    </p>
                </div>
                <div
                    className={cx('work-ss')}
                    onMouseEnter={() => cursorChangeHandler('work')}
                    onMouseLeave={() => cursorChangeHandler('')}
                >
                    <span className={cx('title')}>Work</span>
                    <span className={cx('arrow')}>
                        <RightArrow className={cx('icon')} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Home;
