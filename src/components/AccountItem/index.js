import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/5e49c0fd3ef4ce7c3f432e31c719fded~c5_300x300.webp?x-expires=1664283600&x-signature=%2B8wzZkOJu%2FqZ2M01fIg1SRO3bRw%3D"
        alt="avatar"
        className={cx('avatar')}
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Name</span>
          <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
        </h4>
        <span className={cx('username')}>username</span>
      </div>
    </div>
  );
}

export default AccountItem;
