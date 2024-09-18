import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

function Header({title, onClick}) {
  return (
    <header className={cx('header')} onClick={onClick}>
      <button className={cx('back-btn')}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx('header-title')}>{title}</h4>
    </header>
  );
}

export default Header;
