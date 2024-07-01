import classNames from 'classnames/bind';
import styles from './Experience.module.scss';
import RightArrow from '@/assets/icons/rarrow';
import LeftArrow from '@/assets/icons/larrow';
import { skills } from '@/config/ui-config';
import SkillCard from '../skill-card/SkillCard';

const cx = classNames.bind(styles);
function Exprerience() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <h2 className={cx('title')}>Work Exprerience</h2>
                <div className={cx('control')}>
                    <span className={cx('l-arrow')}>
                        <LeftArrow className={cx('icon')} />
                    </span>
                    <span className={cx('r-arrow')}>
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
