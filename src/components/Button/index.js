import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from "./Button.module.scss"

const cx = classNames.bind(styles)

function Button({ children, to, href, onClick, type, size, disabled, className, leftIcon, rightIcon, ...passProp }) {
  let Comp = 'button'
  const props = {
    onClick,
    ...passProp
  }

  // Remove event listener when btn is disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to
    Comp = Link
  }

  if (href) {
    props.href = href
    Comp = 'a'
  }

  const classes = cx('wrapper', type.split(' '), size, className, {
    disabled,
  })

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  )
}

export default Button;