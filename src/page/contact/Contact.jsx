import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import AroundText from '@/components/around-text/AroundText';
import { GoArrowUpRight } from 'react-icons/go';
import { FaGithubAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';

const cx = classNames.bind(styles);

function Contact() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <AroundText className={cx('title')}>contact</AroundText>
                <h1 className={cx('large-text')}>Get in touch</h1>
                <div className={cx('email')}>
                    <GoArrowUpRight className={cx('right-arrow')} />
                    <p className={cx('gmail')}>dt313.dev21@gmail.com</p>
                </div>
                <div className={cx('icons')}>
                    <a className={cx('icon-wrap')}>
                        <FaGithubAlt className={cx('icon')} />
                    </a>
                    <a className={cx('icon-wrap')}>
                        <GrFacebookOption className={cx('icon')} />
                    </a>
                </div>
                <span className={cx('gradient')}></span>
            </div>
            <div className={cx('footer')}>
                <span className={cx('footer-text')}>2024@Danh Tuan</span>
                <span className={cx('footer-text')}>Clone by https://www.dylanbrouwer.design/contact</span>
            </div>
        </div>
    );
}

export default Contact;
