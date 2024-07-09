import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { useState, useRef, useContext } from 'react';
import { MouseContext } from '@/context/mouse-context';
import { links } from '@/config/ui-config';
import images from '@/assets/imgs';
const cx = classNames.bind(styles);
function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const navigator = useNavigate();
    const aboveRef = useRef();
    const belowRef = useRef();
    const menuRef = useRef();

    const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const handleClickMenuItem = () => {
        setIsOpenMenu(false);
        handleClickMenuIcon();
    };

    const handleClickMenuIcon = (e) => {
        if (!isOpenMenu) {
            aboveRef.current.style.transform = 'rotate(45deg)';
            aboveRef.current.style.margin = '0px';
            aboveRef.current.style.position = 'absolute';
            belowRef.current.style.transform = 'rotate(-45deg)';
            belowRef.current.style.margin = '0px';
            belowRef.current.style.position = 'absolute';
            menuRef.current.style.top = '0';
            menuRef.current.style.bottom = '0';
            setIsOpenMenu(true);
        } else {
            aboveRef.current.style.transform = 'rotate(0deg)';
            aboveRef.current.style.marginBottom = '6px';
            belowRef.current.style.transform = 'rotate(0deg)';
            belowRef.current.style.marginTop = '6px';
            menuRef.current.style.top = '-100vh';
            menuRef.current.style.bottom = '';

            setIsOpenMenu(false);
        }
    };
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img
                    className={cx('logo-img')}
                    src={images.logo}
                    atl="logo"
                    onMouseEnter={() => cursorChangeHandler('large')}
                    onMouseLeave={() => cursorChangeHandler('')}
                    onClick={() => navigator('/')}
                />
            </div>
            <div className={cx('menu')}>
                <NavLink
                    className={({ isActive }) => (isActive ? cx('menu-link', 'active') : cx('menu-link'))}
                    to="/about"
                    onMouseEnter={() => cursorChangeHandler('large')}
                    onMouseLeave={() => cursorChangeHandler('')}
                >
                    About
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? cx('menu-link', 'active') : cx('menu-link'))}
                    to="/work"
                    onMouseEnter={() => cursorChangeHandler('large')}
                    onMouseLeave={() => cursorChangeHandler('')}
                >
                    Work
                </NavLink>
            </div>
            <div className={cx('icons')}>
                <a
                    className={cx('icon-wrap')}
                    onMouseEnter={() => cursorChangeHandler('none')}
                    onMouseLeave={() => cursorChangeHandler('')}
                    onClick={() => window.open(links.gh)}
                >
                    <FaGithubAlt className={cx('icon')} />
                </a>
                <a
                    className={cx('icon-wrap')}
                    onMouseEnter={() => cursorChangeHandler('none')}
                    onMouseLeave={() => cursorChangeHandler('')}
                    onClick={() => window.open(links.fb)}
                >
                    <GrFacebookOption className={cx('icon')} />
                </a>
            </div>
            <div className={cx('contact')}>
                <span
                    className={cx('label')}
                    onClick={() => navigator('/contact')}
                    onMouseEnter={() => cursorChangeHandler('large')}
                    onMouseLeave={() => cursorChangeHandler('')}
                >
                    Get in touch
                </span>
            </div>
            <div className={cx('mobi-menu')} onClick={handleClickMenuIcon}>
                <span className={cx('title')}>Menu</span>
                <div className={cx('menu-icon')}>
                    <span className={cx('above-line')} ref={aboveRef}></span>
                    <span className={cx('below-line')} ref={belowRef}></span>
                </div>
            </div>

            <div ref={menuRef} className={cx('mobi-menu-list')}>
                <div className={cx('mobi-link-list')}>
                    <NavLink
                        className={({ isActive }) => (isActive ? cx('mobi-menu-link', 'active') : cx('mobi-menu-link'))}
                        onClick={handleClickMenuItem}
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? cx('mobi-menu-link', 'active') : cx('mobi-menu-link'))}
                        onClick={handleClickMenuItem}
                        to="/work"
                    >
                        Work
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => (isActive ? cx('mobi-menu-link', 'active') : cx('mobi-menu-link'))}
                        onClick={handleClickMenuItem}
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </div>
                <div className={cx('mobi-icons')}>
                    <a className={cx('mobi-icon-wrap')} onClick={() => window.open(links.gh)}>
                        <FaGithubAlt className={cx('icon')} />
                    </a>
                    <a className={cx('mobi-icon-wrap')}>
                        <GrFacebookOption className={cx('icon')} onClick={() => window.open(links.fb)} />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
