import classNames from 'classnames/bind';
import styles from './SkillCard.module.scss';
import AroundText from '../around-text/AroundText';
import { MouseContext } from '@/context/mouse-context';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function SkillCard({ className, content }) {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <div
            className={cx('wrapper', className)}
            onMouseEnter={() => cursorChangeHandler('drag')}
            onMouseLeave={() => cursorChangeHandler('')}
        >
            <span className={cx('time')}>{content.time}</span>
            <h4 className={cx('title')}>{content.title}</h4>
            <div className={cx('tags')}>
                {content.tags.map((tag, index) => {
                    return (
                        <AroundText className={cx('tag')} fontSize="1.3rem" key={index}>
                            {tag}
                        </AroundText>
                    );
                })}
            </div>
            <p className={cx('description')}>{content.description}</p>
        </div>
    );
}

export default SkillCard;
