import classNames from 'classnames/bind';
import styles from './AroundText.module.scss';
import { motion } from 'framer-motion';
const cx = classNames.bind(styles);

function AroundText({ children, className, fontSize }) {
    return (
        <motion.span
            initial={{ y: '-100px', opacity: 0 }}
            animate={{ y: '0', opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ fontSize: fontSize }}
            className={cx('wrapper', { [className]: className })}
        >
            {children}
        </motion.span>
    );
}

export default AroundText;
