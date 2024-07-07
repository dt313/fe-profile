import useMousePosition from '@/hook/useMousePosition';
import styles from './Mouse.module.scss';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';

const cx = classNames.bind(styles);

function Mouse() {
    const { x, y } = useMousePosition();
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    return (
        <>
            <div style={{ left: `${x}px`, top: `${y}px` }} className={cx('ring', cursorType)}></div>
            <div className={cx('dot', cursorType)} style={{ left: `${x}px`, top: `${y}px` }}></div>
        </>
    );
}

export default Mouse;
