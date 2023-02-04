import PropTypes from 'prop-types';

const inputAttrType = {
      accept: PropTypes.oneOfType([PropTypes.oneOf([
            'application/*',
            'audio/*',
            'video/*',
            'image/*'
      ]), PropTypes.string]),
      alt: PropTypes.string,
      autoComplete: PropTypes.oneOfType([PropTypes.oneOf([
            'off',
            'on',
            'name',
            'honorific-prefix',
            'given-name',
            'additional-name',
            'family-name',
            'honorific-suffix',
            'nickname',
            'email',
            'username',
            'new-password',
            'current-password',
            'one-time-code',
            'organization-title',
            'organization',
            'street-address',
            'address-line1',
            'address-line2',
            'address-line3',
            'address-level1',
            'address-level2',
            'address-level3',
            'address-level4',
            'country',
            'country-name',
            'postal-code',
            'cc-name',
            'cc-given-name',
            'cc-additional-name',
            'cc-family-name',
            'cc-number',
            'cc-exp',
            'cc-exp-month',
            'cc-exp-year',
            'cc-csc',
            'cc-type',
            'transaction-currency',
            'transaction-amount',
            'language',
            'bday',
            'bday-day',
            'bday-month',
            'bday-year',
            'sex',
            'tel',
            'tel-country-code',
            'tel-national',
            'tel-area-code',
            'tel-local',
            'tel-extension',
            'impp',
            'url',
            'photo'
      ]), PropTypes.string]),
      autoCorrect: PropTypes.oneOfType([PropTypes.oneOf([
            'on',
            'off'
      ]), PropTypes.string]),
      capture: PropTypes.oneOfType([PropTypes.oneOf(['user', 'environment']), PropTypes.string]),
      checked: PropTypes.bool,
      defaultChecked: PropTypes.bool,
      dirName: PropTypes.string,
      disabled: PropTypes.bool,
      form: PropTypes.string,
      formAction: PropTypes.string,
      formEnctype: PropTypes.oneOfType([PropTypes.oneOf([
            'application/x-www-form-urlencoded',
            'multipart/form-data',
            'text/plain'
      ]), PropTypes.string]),
      formMethod: PropTypes.oneOfType([PropTypes.oneOf(['get', 'post', 'dialog']), PropTypes.string]),
      formNovalidate: PropTypes.bool,
      formTarget: PropTypes.oneOfType([PropTypes.oneOf([
            '_self',
            '_blank',
            '_parent',
            '_top'
      ]), PropTypes.string]),
      height: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
      incremental: PropTypes.bool,
      list: PropTypes.string,
      max: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date)
      ]),
      maxLength: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
      min: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.instanceOf(Date)
      ]),
      minLength: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
      multiple: PropTypes.bool,
      name: PropTypes.string,
      pattern: PropTypes.arrayOf(PropTypes.instanceOf(RegExp)),
      placeholder: PropTypes.string,
      readOnly: PropTypes.bool,
      required: PropTypes.bool,
      results: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
      size: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
      src: PropTypes.string,
      step: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
      type: PropTypes.oneOfType([PropTypes.oneOf([
            'button',
            'checkbox',
            'date',
            'datetime-local',
            'email',
            'file',
            'hidden',
            'image',
            'month',
            'number',
            'password',
            'radio',
            'range',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week'
      ]), PropTypes.string]),
      value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
      webkitdirectory: PropTypes.bool,
      width: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
      ]),
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
      onTouchStart: PropTypes.func


}

export default inputAttrType;