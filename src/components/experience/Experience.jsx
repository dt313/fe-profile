import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import RightArrow from '@/assets/icons/rarrow';
import LeftArrow from '@/assets/icons/larrow';
import { skills } from '@/config/ui-config';
import SkillCard from '../skill-card/SkillCard';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';

const cx = classNames.bind(styles);
function Exprerience() {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Work Exprerience</h2>
                <div className={cx('control')}>
                    <span
                        className={cx('l-arrow')}
                        onMouseEnter={() => cursorChangeHandler('mini-dot')}
                        onMouseLeave={() => cursorChangeHandler('')}
                    >
                        <LeftArrow className={cx('icon')} />
                    </span>
                    <span
                        className={cx('r-arrow')}
                        onMouseEnter={() => cursorChangeHandler('mini-dot')}
                        onMouseLeave={() => cursorChangeHandler('')}
                    >
                        <RightArrow className={cx('icon')} />
                    </span>
                </div>
            </div>

            <div className={cx('skill-list')}>
                {skills.map((skill, index) => {
                    return <SkillCard key={index} content={skill} />;
                })}
            </div>
        </div>
    );
}

export default Exprerience;
