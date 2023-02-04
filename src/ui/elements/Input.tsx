import React from 'react';
import { InferProps } from 'prop-types';
// import clsx from 'clsx';
import inputAttrType from '../attributes/input';
import globalAttrType from '../attributes/global';


export default function Input(props: InferProps<typeof Input.propTypes>) {
      return React.createElement('input', {...props })
}

Input.propTypes = {
      ...globalAttrType,
      ...inputAttrType
}