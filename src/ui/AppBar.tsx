import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';


export default function AppBar(props: InferProps<typeof AppBar.propTypes>) {
      const {className,children} = props;
      return React.createElement('header',{
            className:clsx("appbar",className),
            ...props
            
      },children)
}

AppBar.propTypes = {
      className: PropTypes.string,
      children: PropTypes.node,
      style:PropTypes.object,
}