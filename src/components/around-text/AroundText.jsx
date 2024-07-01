import classNames from 'classnames/bind';
import styles from './AroundText.module.scss';

const cx = classNames.bind(styles);

function AroundText({ children, className, fontSize }) {
    return (
        <span className={cx('wrapper', className)} style={{ fontSize: fontSize }}>
            {children}
        </span>
    );
}

export default AroundText;
