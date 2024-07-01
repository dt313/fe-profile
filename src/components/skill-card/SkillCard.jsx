import classNames from 'classnames/bind';
import styles from './SkillCard.module.scss';
import AroundText from '../around-text/AroundText';

const cx = classNames.bind(styles);

function SkillCard({ className, content }) {
    return (
        <div className={cx('wrapper', className)}>
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
