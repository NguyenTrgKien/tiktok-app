import Style from './AcountItem.module.scss';
import classNames from 'classnames/bind';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(Style);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        alt="avatar"
        src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/93590a8e0f17d43d5cdc0877c3bb904c.jpeg?lk3s=a5d48078&nonce=89665&refresh_token=543ce5fd8f5924958a8bcc4e88ac24b6&x-expires=1726556400&x-signature=7CIDNNUCsLlEu55Is4ShoGQsB3c%3D&shp=a5d48078&shcp=81f88b70"
      />
      <div className={cx('info')}>
        <div className={cx('info-name')}>Dinocusuc2712</div>
        <div className={cx('username')}>Dinocusuc2712</div>
      </div>
      <FontAwesomeIcon icon={faEllipsisVertical}/>
    </div>
  );
}

export default AccountItem;
