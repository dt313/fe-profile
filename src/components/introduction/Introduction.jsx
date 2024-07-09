import classNames from 'classnames/bind';
import styles from './Introduction.module.scss';
import images from '@/assets/imgs';

const cx = classNames.bind(styles);
function Introduction({ className }) {
    return (
        <div className={cx('wrapper', className)}>
            <div className={cx('text-wrap')}>
                <h3 className={cx('main-text')}>
                    I am a fourth-year student at Soongsil University (SSU) in Seoul, South Korea's capital.
                </h3>
                <p className={cx('sub-text')}>
                    I am passionate about technology with a strong enthusiasm for exploring the latest trends in this
                    field. I am always eager and prepared to learn and apply new technologies in practice. Additionally,
                    I enjoy sharing and exchanging knowledge with the community to collectively advance in our tech
                    careers.
                </p>
                <p className={cx('sub-text')}>
                    I am currently looking for a suitable job opportunity for beginners in the field of technology. I am
                    enthusiastic and eager to learn in order to develop my skills and gain experience. I hope to join a
                    dynamic work environment that offers opportunities to apply new knowledge in practice.
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
