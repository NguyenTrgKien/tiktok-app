import className from 'classnames/bind';
import Style from './Popper.module.scss';

const cx = className.bind(Style);

function WrapperPopper({children, className}) {
    return (
        <div className={cx('wrapper', className)}>
            {children}
        </div>
    )
}

export default WrapperPopper;