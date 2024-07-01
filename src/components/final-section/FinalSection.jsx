import classNames from 'classnames/bind';
import styles from './FinalSection.module.scss';
import Setting from '@/assets/icons/setting';
import AroundText from '../around-text/AroundText';

const cx = classNames.bind(styles);

function FinalSection() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('img-wrap')}>
                <Setting className={cx('img')} />
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
