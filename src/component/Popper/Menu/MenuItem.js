import Button from '~/component/Button';
import style from './Menu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function MenuItem({data}) {
    return (
        <Button leftIcon={data.icon} className={cx('menu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItem;