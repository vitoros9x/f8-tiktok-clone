import classNames from 'classnames/bind';
import Header from '~/components/Layout/components/Header';
import styles from './DefaultLayout.module.scss';
import Sidebar from './Sidebar';

const cx = classNames.bind(styles)

function DefaultLayout({ children }) {
	return (
		<div>
			<Header />
			<div className={`${cx("wrapper")} flex`}>
				<Sidebar className="" />
				<div className={cx("content")}>{children}</div>
			</div>
		</div>
	);
}

export default DefaultLayout;
