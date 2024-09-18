import { WrapperPopper } from '~/component/Popper';
import Tippy from '@tippyjs/react/headless';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';

const cx = classNames.bind(style);

function Menu({ children, item = [], onChange }) {
  const [history, setHistory] = useState([{ data: item }]);

  const current = history[history.length - 1];
  const renderItem = () => {
    return current.data.map((value, index) => {
      const isParent = !!value.children;
      return (
        <MenuItem
          key={index}
          data={value}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, value.children]);
            }else{
              onChange(value);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 400]}
      placement="bottom-end"
      interactive={true}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <WrapperPopper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header
                title="Language"
                onClick={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItem()}
          </WrapperPopper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
