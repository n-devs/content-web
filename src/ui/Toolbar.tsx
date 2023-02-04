import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';


export default function Toolbar(props: InferProps<typeof Toolbar.propTypes>) {
      const {className,children} = props;
      return React.createElement('div',{
            className:clsx("toolbar",className),
            
      },children)
}

Toolbar.propTypes = {
      className: PropTypes.string,
      children: PropTypes.node
}