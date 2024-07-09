import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import RightArrow from '@/assets/icons/rarrow';
import LeftArrow from '@/assets/icons/larrow';
import { skills } from '@/config/ui-config';
import SkillCard from '../skill-card/SkillCard';
import { useContext, useRef } from 'react';
import { MouseContext } from '@/context/mouse-context';
import ScrollContainer from 'react-indiana-drag-scroll';

const cx = classNames.bind(styles);
function Exprerience() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const sliderRef = useRef();

    const handleClickLeftArrow = () => {
        const slider = sliderRef.current.container.current;
        slider.scrollBy({ left: -300, behavior: 'smooth' });
        console.log(slider.scrollLeft);
    };

    const handleClickRightArrow = () => {
        const slider = sliderRef.current.container.current;
        slider.scrollBy({ left: 300, behavior: 'smooth' });
        console.log(slider.scrollLeft);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Work Exprerience</h2>
                <div className={cx('control')}>
                    <span
                        className={cx('l-arrow')}
                        onMouseEnter={() => cursorChangeHandler('mini-dot')}
                        onMouseLeave={() => cursorChangeHandler('')}
                        onClick={handleClickLeftArrow}
                    >
                        <LeftArrow className={cx('icon')} />
                    </span>
                    <span
                        className={cx('r-arrow')}
                        onMouseEnter={() => cursorChangeHandler('mini-dot')}
                        onMouseLeave={() => cursorChangeHandler('')}
                        onClick={handleClickRightArrow}
                    >
                        <RightArrow className={cx('icon')} />
                    </span>
                </div>
            </div>

            <ScrollContainer className={cx('skill-list')} ref={sliderRef}>
                {skills.map((skill, index) => {
                    return <SkillCard key={index} content={skill} />;
                })}
            </ScrollContainer>
        </div>
    );
}

export default Exprerience;
