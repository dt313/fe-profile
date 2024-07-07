import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import AroundText from '@/components/around-text/AroundText';
import { GoArrowUpRight } from 'react-icons/go';
import { FaGithubAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';
import { links } from '@/config/ui-config';

const cx = classNames.bind(styles);

function Contact() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('body')}>
                <AroundText className={cx('title')} fontSize="1.2rem">
                    contact
                </AroundText>
                <h1 className={cx('large-text')}>Get in touch</h1>
                <div className={cx('email')}>
                    <GoArrowUpRight className={cx('right-arrow')} />
                    <p className={cx('gmail')}>dt313.dev21@gmail.com</p>
                </div>
                <div className={cx('icons')}>
                    <a
                        className={cx('icon-wrap')}
                        onMouseEnter={() => cursorChangeHandler('mini-dot')}
                        onMouseLeave={() => cursorChangeHandler('')}
                        onClick={() => window.open(links.gh)}
                    >
                        <FaGithubAlt className={cx('icon')} />
                    </a>
                    <a
                        className={cx('icon-wrap')}
                        onMouseEnter={() => cursorChangeHandler('mini-dot')}
                        onMouseLeave={() => cursorChangeHandler('')}
                        onClick={() => window.open(links.fb)}
                    >
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
