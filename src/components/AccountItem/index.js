import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://cdn.sforum.vn/sforum/wp-content/uploads/2023/11/avatar-vo-tri-thumbnail.jpg"
                alt="Toan"
            />
            <div className={cx('info')}>
                <h4 classNames={cx('name')}>
                    <span> Van Toan </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>levantoann</span>
            </div>
        </div>
    );
}

export default AccountItem;
