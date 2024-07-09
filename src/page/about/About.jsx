import classNames from 'classnames/bind';
import styles from './About.module.scss';
import AroundText from '@/components/around-text/AroundText';
import Introduction from '@/components/introduction';
import Exprerience from '@/components/experience/Experience';
import Tool from '@/assets/icons/tool';
import Tech from '@/components/tech/Tech';
import FinalSection from '@/components/final-section/FinalSection';
import RightArrow from '@/assets/icons/rarrow';
import { useContext, useEffect, useRef } from 'react';
import { MouseContext } from '@/context/mouse-context';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const cx = classNames.bind(styles);

function About() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const navigator = useNavigate();
    const toolImgRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercent = scrollY / (documentHeight - windowHeight);
            const toolImg = toolImgRef.current;
            const translatePercent = 100 - scrollPercent * 100 * 1.5;
            toolImg.style.transform = `translateX(${translatePercent}%)`;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('noise')}></div>
            <div className={cx('header')}>
                <div className={cx('text-wrap')}>
                    <AroundText className={cx('title')} fontSize="1.4rem">
                        about
                    </AroundText>
                    <motion.h1
                        initial={{ y: '100px', opacity: 0 }}
                        animate={{ y: '0', opacity: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className={cx('large-text')}
                    >
                        An eye
                    </motion.h1>
                    <motion.h1
                        initial={{ y: '100px', opacity: 0 }}
                        animate={{ y: '0', opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className={cx('large-text')}
                    >
                        for design
                    </motion.h1>
                    <motion.h1
                        initial={{ y: '100px', opacity: 0 }}
                        animate={{ y: '0', opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className={cx('large-text')}
                    >
                        and motion
                    </motion.h1>
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
                <Tool className={cx('tool-img')} ref={toolImgRef} />
            </div>

            <div className={cx('tech')}>
                <Tech />
            </div>

            <div className={cx('final-section')}>
                <FinalSection />
            </div>
            <div className={cx('swipper')}>
                <div
                    className={cx('swipper-wrapper')}
                    onMouseEnter={() => cursorChangeHandler('large')}
                    onMouseLeave={() => cursorChangeHandler('')}
                    onClick={() => navigator('/contact')}
                >
                    <div className={cx('marquee-w')}>
                        <div className={cx('marquee')}>
                            <p className={cx('scroll-text')}>
                                <span className={cx('text')}>
                                    Just say hi <RightArrow className={cx('r-arrow')} />
                                </span>
                                <span className={cx('text')}>
                                    work together <RightArrow className={cx('r-arrow')} />
                                </span>
                                <span className={cx('text')}>
                                    get in touch <RightArrow className={cx('r-arrow')} />
                                </span>
                                <span className={cx('text')}>
                                    contact me <RightArrow className={cx('r-arrow')} />
                                </span>
                            </p>
                        </div>
                        <div className={cx('marquee', 'marquee2')}>
                            <p className={cx('scroll-text')}>
                                <span className={cx('text')}>
                                    Just say hi <RightArrow className={cx('r-arrow')} />
                                </span>
                                <span className={cx('text')}>
                                    work together <RightArrow className={cx('r-arrow')} />
                                </span>
                                <span className={cx('text')}>
                                    get in touch <RightArrow className={cx('r-arrow')} />
                                </span>
                                <span className={cx('text')}>
                                    contact me <RightArrow className={cx('r-arrow')} />
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer')}>
                <span className={cx('footer-text')}> 2024@Danh Tuan</span>
                <span className={cx('footer-text')}> Clone: dylanbrouwer.design </span>
            </div>
        </div>
    );
}

export default About;
