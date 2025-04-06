import classNames from 'classnames/bind';
import styles from './Tech.module.scss';
import { techList } from '@/config/ui-config';
import AroundText from '../around-text/AroundText';

const cx = classNames.bind(styles);
function Tech() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tech-list')}>
                {techList.map((tech, index) => {
                    return (
                        <div key={index} className={cx('tech-item')}>
                            <img className={cx('item-logo')} src={tech.logo} />
                            <h4 className={cx('item-title')}>{tech.title}</h4>
                            <AroundText className={cx('item-tag')} fontSize="1.2rem">
                                {tech.tag}
                            </AroundText>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Tech;
