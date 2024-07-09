import classNames from 'classnames/bind';
import styles from './Work.module.scss';
import images from '@/assets/imgs';
import Plus from '@/assets/icons/plus';
import LeftArrow from '@/assets/icons/larrow';
import RightArrow from '@/assets/icons/rarrow';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';

const cx = classNames.bind(styles);

function Work() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const handleClickWebsite = (e) => {
        e.preventDefault();
        console.log('CLick');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('thumnail-ss')}>
                    {/* <img className={cx('thumnail')} src={images.avatar} /> */}

                    <iframe
                        className={cx('thumnail')}
                        onClick={handleClickWebsite}
                        src="https://reactjs-blog-beta.vercel.app/"
                        title="Blog"
                    ></iframe>
                </div>
                <div
                    className={cx('title-ss')}
                    onMouseEnter={() => cursorChangeHandler('search')}
                    onMouseLeave={() => cursorChangeHandler('')}
                    onClick={() => window.open('https://reactjs-blog-beta.vercel.app')}
                >
                    <div className={cx('animation-text')}>
                        <p className={cx('title')}>Personal Blog</p>
                        <p className={cx('animation-title')}>Show project</p>
                    </div>
                    <span className={cx('plus')}>
                        <Plus className={cx('icon')} />
                    </span>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('description-ss')}>
                    <p className={cx('description-text')}>
                        Hi, my name is Nguyen Danh Tuan. I am a skilled web developer specializing in ReactJS and
                        NodeJS. I have extensive experience building dynamic, high-performance web applications and am
                        passionate about creating seamless user experiences.
                    </p>
                </div>
                <div className={cx('control-ss')}>
                    <span className={cx('left-arrow')}>
                        <LeftArrow className={cx('icon')} />
                    </span>
                    <span className={cx('right-arrow')}>
                        <RightArrow className={cx('icon')} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Work;
