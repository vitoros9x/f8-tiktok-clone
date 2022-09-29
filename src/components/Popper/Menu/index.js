import Tippy from '@tippyjs/react/headless'
import classNames from 'classnames/bind';
import styles from "./Menu.module.scss"

import { Wrapper as PopperWrapper } from '~/components/Popper'

const cx = classNames.bind(styles)

function Menu({ children }) {
  return (
    <Tippy
      visible
      interactive
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>

          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  )
}

export default Menu;