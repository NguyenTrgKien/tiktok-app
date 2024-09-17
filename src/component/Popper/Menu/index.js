import { WrapperPopper } from '~/component/Popper';
import Tippy from '@tippyjs/react/headless';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';

const cx = classNames.bind(style);

function Menu({ children, item = [] }) {
  const renderItem = () => {
    return item.map((value, index) => <MenuItem key={index} data={value} />);
  };

  return (
    <Tippy
      delay={[0, 600]}
      placement="bottom-end"
      interactive={true}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx('menu-popper')}>{renderItem()}</WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
