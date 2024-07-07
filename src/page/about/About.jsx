import classNames from 'classnames/bind';
import styles from './About.module.scss';
import AroundText from '@/components/around-text/AroundText';
import Introduction from '@/components/introduction';
import Exprerience from '@/components/experience/Experience';
import Tool from '@/assets/icons/tool';
import Tech from '@/components/tech/Tech';
import FinalSection from '@/components/final-section/FinalSection';
const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <div className={cx('text-wrap')}>
                    <AroundText className={cx('title')} fontSize="1.2rem">
                        about
                    </AroundText>
                    <h1 className={cx('large-text')}>An eye</h1>
                    <h1 className={cx('large-text')}>for design</h1>
                    <h1 className={cx('large-text')}>and motion</h1>
                </div>
                <div className={cx('object')}>
                    <span className={cx('t-color')}></span>
                    <span className={cx('b-color')}></span>
                </div>
            </div>
            <div className={cx('introduction')}>
                <Introduction />
            </div>
            <div className={cx('experience')}>
                <Exprerience />
            </div>

            <div className={cx('scroll-text')}>
                <Tool className={cx('tool-img')} />
            </div>

            <div className={cx('tech')}>
                <Tech />
            </div>

            <div className={cx('final-section')}>
                <FinalSection />
            </div>
            <div className={cx('swipper')}>
                <div className={cx('swipper-wrapper')}></div>
            </div>
            <div className={cx('footer')}>
                <span className={cx('footer-text')}> 2024@Danh Tuan</span>
                <span className={cx('footer-text')}> Clone: https://www.dylanbrouwer.design </span>
            </div>
        </div>
    );
}

export default About;
