import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleQuestion,
  faCircleXmark,
  faEarthAsia,
  faEllipsisVertical,
  faKeyboard,
  faMagnifyingGlass,
  faSignIn,
  faSpinner,
  faThermometerEmpty,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { WrapperPopper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';

import classNames from 'classnames/bind';
import style from './Header.module.scss';
import logo from '~/assets/image/index';

const cx = classNames.bind(style);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'FeelBack and help',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard Shortcuts',
  },
];

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={logo.default} alt="Tiktok" />
        </div>
        <Tippy
          appendTo={document.body}
          interactive={true}
          render={(attrs) => (
            <div className={cx('search-drop')} tabIndex="-1" {...attrs}>
              <WrapperPopper>
                <h3 className={cx('search-title')}>Account</h3>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </WrapperPopper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button text>Upload</Button>
          <Button primary>Login</Button>
          <Menu item={MENU_ITEMS}>
            <button className={cx('more-btn')}>
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
