import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import images from '@/assets/imgs';

const cx = classNames.bind(styles);
function Introduction({ className }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('text-wrap')}>
                <h3 className={cx('main-text')}>
                    I’m a Digital Designer & No-code Developer based in Enschede, Netherlands. Creating digital
                    experiences with an eye for design and motion.
                </h3>
                <p className={cx('sub-text')}>
                    Being creative with digital and motion design for websites is what I’ve been doing for the past 7+
                    years. With just UI design I was not satisfied. Creating websites that are visually attractive
                    through design and motion is what I love to do.
                </p>
                <p className={cx('sub-text')}>
                    By embracing no-code tools like Webflow I'm not just the designer anymore. Now I can develop my own
                    digital creations into an online experience, while having full control of design, motion and build.
                </p>
            </div>
            <div className={cx('image-wrap')}>
                <div className={cx('image-frame')}>
                    <div className={cx('mask')}></div>

                    <div className={cx('marquee-w')}>
                        <div className={cx('marquee')}>
                            <p className={cx('scroll-text')}>
                                <span className={cx('text')}>NGUYEN DANH TUAN</span>
                                <span className={cx('text')}>WEB DEVOLOPER</span>
                                <span className={cx('text')}>FRONT-END</span>
                                <span className={cx('text')}>BACK-END</span>
                            </p>
                        </div>
                        <div className={cx('marquee', 'marquee2')}>
                            <p className={cx('scroll-text')}>
                                <span className={cx('text')}>NGUYEN DANH TUAN</span>
                                <span className={cx('text')}>WEB DEVOLOPER</span>
                                <span className={cx('text')}>FRONT-END</span>
                                <span className={cx('text')}>BACK-END</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;
