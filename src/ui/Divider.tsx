import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';


export default function Divider(props: InferProps<typeof Divider.propTypes>) {
      const {className,children} = props;
      return React.createElement('div',{
            className:clsx("divider",className),
            
      },children)
}

Divider.propTypes = {
      className: PropTypes.string,
      children: PropTypes.node
}