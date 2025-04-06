import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import AroundText from '@/components/around-text/AroundText';
import { GoArrowUpRight } from 'react-icons/go';
import { FaGithubAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';
import { links } from '@/config/ui-config';
import { motion } from 'framer-motion';
import useTitle from '@/hook/useTitle';
const cx = classNames.bind(styles);

function Contact() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    useTitle('Danh Tuấn | Contact');

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('body')}>
                    <div className={cx('noise')}></div>
                    <AroundText className={cx('title')}>contact</AroundText>
                    <motion.h1
                        initial={{ y: '100px', opacity: 0 }}
                        animate={{ y: '0', opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={cx('large-text')}
                    >
                        Get in touch
                    </motion.h1>
                    <div className={cx('email')}>
                        <GoArrowUpRight className={cx('right-arrow')} />
                        <a className={cx('gmail')} href={`mailto:${links.gmail}`}>
                            {links.gmail}
                        </a>
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
            </div>
            <div className={cx('footer')}>
                <span className={cx('footer-text')}>2024@Danh Tuan</span>
                <a className={cx('footer-text')} href="http://dylanbrouwer.design" target="_blank">
                    Clone : dylanbrouwer.design
                </a>
            </div>
        </div>
    );
}

export default Contact;
