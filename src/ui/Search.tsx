import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';
import Image from 'next/image';
import iconSearch from 'ionicons/dist/svg/search.svg'


export default function Search(props: InferProps<typeof Search.propTypes>) {
      const { className,type = "serach",name="search" } = props;
      return React.createElement('div', {
            className: clsx("search")
      }, React.createElement('input', {
            className: clsx("search__input", className),
            type:type,
            ...props
      }), React.createElement('div', {
            className: clsx("search__icon")
      }, React.createElement('i', {
            className:'bi bi-search',
      })))
}

Search.propTypes = {
      className: PropTypes.string,
      placeholder: PropTypes.string,
      disabled: PropTypes.bool,
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
      type: PropTypes.oneOfType([PropTypes.oneOf(['search', 'reset','text']), PropTypes.string]),
      name:PropTypes.string
}