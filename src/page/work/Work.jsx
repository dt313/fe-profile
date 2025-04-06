import classNames from 'classnames/bind';
import styles from './Work.module.scss';
import useTitle from '@/hook/useTitle';
import { projects } from '@/config/ui-config';
import Project from '@/components/project';
import { useRef } from 'react';

const cx = classNames.bind(styles);

function Work() {
    useTitle('Danh Tuấn | Work');
    const listRef = useRef(null);

    const handleSwipLeft = (index) => {
        if (index < 0) {
            const percent = (100 / projects.length) * (projects.length - 1);
            listRef.current.style.transform = `translate(-${percent}%)`;
        } else {
            const percent = (100 / projects.length) * index;
            console.log(percent, index);
            listRef.current.style.transform = `translate(-${percent}%)`;
        }
    };

    const handleSwipRight = (index) => {
        if (index === projects.length) {
            listRef.current.style.transform = `translate(0%)`;
        } else {
            const percent = (100 / projects.length) * index;
            console.log(percent);
            listRef.current.style.transform = `translate(-${percent}%)`;
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('list')} ref={listRef}>
                {projects.map((project, index) => {
                    return (
                        <div className={cx('project')} key={index}>
                            <Project
                                content={project}
                                index={index}
                                handleMoveLeft={handleSwipLeft}
                                handleMoveRight={handleSwipRight}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Work;
