import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import clsx from 'clsx';


export default function Paper(props: InferProps<typeof Paper.propTypes>) {
      const {className,children} = props;
      return React.createElement('div',{
            className:clsx("paper",className),
            
      },children)
}

Paper.propTypes = {
      className: PropTypes.string,
      children: PropTypes.node
}