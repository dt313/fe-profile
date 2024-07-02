import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { FaGithubAlt } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Header() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    return (
        <nav className={cx('wrapper')}>
            <div className={cx('logo')}>
                <NavLink className={cx('logo-icon')} to="/">
                    {' '}
                    dt
                </NavLink>
            </div>
            <div className={cx('menu')}>
                <NavLink
                    className={({ isActive }) => (isActive ? cx('menu-link', 'active') : cx('menu-link'))}
                    to="/about"
                >
                    About
                </NavLink>
                <NavLink
                    className={({ isActive }) => (isActive ? cx('menu-link', 'active') : cx('menu-link'))}
                    to="/work"
                >
                    Work
                </NavLink>
            </div>
            <div className={cx('icons')}>
                <a className={cx('icon-wrap')}>
                    <FaGithubAlt className={cx('icon')} />
                </a>
                <a className={cx('icon-wrap')}>
                    <GrFacebookOption className={cx('icon')} />
                </a>
            </div>
            <div className={cx('contact')}>
                <span className={cx('label')}>Get in touch</span>
            </div>
            <div className={cx('mobi-menu')} onClick={() => setIsOpenMenu(!isOpenMenu)}>
                <span className={cx('title')}>Menu</span>
            </div>

            {isOpenMenu && (
                <div className={cx('mobi-menu-list')}>
                    <div className={cx('mobi-link-list')}>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? cx('mobi-menu-link', 'active') : cx('mobi-menu-link')
                            }
                            to="/about"
                        >
                            About
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? cx('mobi-menu-link', 'active') : cx('mobi-menu-link')
                            }
                            to="/work"
                        >
                            Work
                        </NavLink>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? cx('mobi-menu-link', 'active') : cx('mobi-menu-link')
                            }
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </div>
                    <div className={cx('mobi-icons')}>
                        <a className={cx('mobi-icon-wrap')}>
                            <FaGithubAlt className={cx('icon')} />
                        </a>
                        <a className={cx('mobi-icon-wrap')}>
                            <GrFacebookOption className={cx('icon')} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Header;
