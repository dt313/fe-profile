import classNames from 'classnames/bind';
import styles from './FinalSection.module.scss';
import Setting from '@/assets/icons/setting';
import AroundText from '../around-text/AroundText';
import { useEffect, useRef } from 'react';

const cx = classNames.bind(styles);

function FinalSection() {
    const settingRef = useRef();
    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercent = scrollY / (documentHeight - windowHeight);
            const settingImg = settingRef.current;
            const translatePercent = 100 - scrollPercent * 100 * 1.5;
            settingImg.style.transform = `rotate(${translatePercent}deg)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-wrap')}>
                <Setting className={cx('img')} ref={settingRef} />
            </div>
            <div className={cx('text-wrap')}>
                <p className={cx('text')}>
                    I am available for a limited number of freelance projects this year. Looking for a{' '}
                    <AroundText fontSize="2.4rem">front-end</AroundText> /{' '}
                    <AroundText fontSize="2.4rem">back-end</AroundText> ? Just get in touch.
                </p>
            </div>
        </div>
    );
}

export default FinalSection;
