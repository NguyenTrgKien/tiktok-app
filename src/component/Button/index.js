import classNames from 'classnames/bind';
import Style from './Button.module.scss';
import { Link } from 'react-router-dom';

let cx = classNames.bind(Style);

function Button({
  to,
  href,
  children,
  primary = false,
  outline = false,
  large = false,
  small = false,
  disabled = false,
  text = false,
  onClick,
  leftIcon,
  rightIcon,
  className,
  ...passProps
}) {
  let Comp = 'button';

  const prop = {
    onClick,
    ...passProps,
  };

  if (to) {
    Comp = Link;
  } else if (href) {
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    large,
    small,
    disabled,
    text,
    leftIcon,
    rightIcon,
    [className]: className
  });

  if(disabled){
    Object.entries(prop).forEach((couple) => {
      if(couple[0].startsWith('on') && typeof couple[1] === 'function') {
        delete prop.onClick;
      }
    })
  }

  return (
    <Comp className={classes} to={to} href={href} {...prop}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
