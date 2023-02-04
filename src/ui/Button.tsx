import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';


export default function Button(props: InferProps<typeof Button.propTypes>) {
      return React.createElement('button',{
            className:clsx("btn btn__secondary",props.className),
            ...props
            
      },props.children)
}

Button.propTypes = {
      className: PropTypes.string,
      children: PropTypes.node,
      disabled: PropTypes.bool,
      href: PropTypes /* @typescript-to-proptypes-ignore */.any,
      onClick: PropTypes.func,
      onContextMenu: PropTypes.func,
      onDragLeave: PropTypes.func,
      onFocus: PropTypes.func,
      onFocusVisible: PropTypes.func,
      onKeyDown: PropTypes.func,
      onKeyUp: PropTypes.func,
      onMouseDown: PropTypes.func,
      onMouseLeave: PropTypes.func,
      onMouseUp: PropTypes.func,
      onTouchEnd: PropTypes.func,
      onTouchMove: PropTypes.func,
      onTouchStart: PropTypes.func,
      style:PropTypes.object,
      type: PropTypes.oneOfType([PropTypes.oneOf(['button', 'reset', 'submit']), PropTypes.string]),
}