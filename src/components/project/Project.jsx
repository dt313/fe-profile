import classNames from 'classnames/bind';
import styles from './Project.module.scss';
import Plus from '@/assets/icons/plus';
import LeftArrow from '@/assets/icons/larrow';
import RightArrow from '@/assets/icons/rarrow';
import { useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';

const cx = classNames.bind(styles);

function Project({ content = {}, index, handleMoveLeft, handleMoveRight }) {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const handleClickWebsite = (e) => {
        e.preventDefault();
        // console.log('CLick');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <div className={cx('thumnail-ss')}>
                    {/* <img className={cx('thumnail')} src={images.avatar} /> */}

                    <iframe
                        className={cx('thumnail')}
                        onClick={handleClickWebsite}
                        src={content.link}
                        title="Blog"
                    ></iframe>
                </div>
                <div
                    className={cx('title-ss')}
                    onMouseEnter={() => cursorChangeHandler('search')}
                    onMouseLeave={() => cursorChangeHandler('')}
                    onClick={() => window.open(content.link)}
                >
                    <div className={cx('animation-text')}>
                        <p className={cx('title')}>{content.title || 'Show project'}</p>
                        <p className={cx('animation-title')}>Show project</p>
                    </div>
                    <span className={cx('plus')}>
                        <Plus className={cx('icon')} />
                    </span>
                </div>
            </div>
            <div className={cx('right')}>
                <div className={cx('description-ss')}>
                    <p className={cx('description-text')}>{content.description || ''}</p>
                </div>
                <div className={cx('control-ss')}>
                    <span className={cx('left-arrow')} onClick={() => handleMoveLeft(index - 1)}>
                        <LeftArrow className={cx('icon')} />
                    </span>
                    <span className={cx('right-arrow')} onClick={() => handleMoveRight(index + 1)}>
                        <RightArrow className={cx('icon')} />
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Project;
