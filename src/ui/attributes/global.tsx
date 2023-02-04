import PropTypes from 'prop-types';

const globalAttrType = {
      accessKey: PropTypes.string,
      autoCapitalize: PropTypes.oneOfType([PropTypes.oneOf([
            'off', 'on', 'none', 'sentences', 'words', 'characters'
      ]), PropTypes.string]),
      autoFocus: PropTypes.bool,
      className: PropTypes.string,
      contentEditable: PropTypes.bool,
      contextMenu: PropTypes.string,
      'data-*': PropTypes.string,
      dir: PropTypes.oneOfType([PropTypes.oneOf([
            'ltr', 'rtl', 'auto'
      ]), PropTypes.string]),
      draggable: PropTypes.bool,
      enterKeyHint: PropTypes.oneOfType([PropTypes.oneOf([
            'enter',
            'done',
            'go',
            'next',
            'previous',
            'search',
            'send'
      ]), PropTypes.string]),
      exportParts: PropTypes.string,
      hidden: PropTypes.oneOfType([PropTypes.oneOf([
            'hidden',
            'until-found'
      ]), PropTypes.string]),
      id: PropTypes.string,
      inert: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
      inputMode: PropTypes.oneOfType([PropTypes.oneOf([
            'none',
            'text',
            'tel',
            'url',
            'email',
            'numeric',
            'decimal',
            'search'
      ]), PropTypes.string]),
      is: PropTypes.string,
      itemId: PropTypes.string,
      itemProp: PropTypes.oneOfType([PropTypes.oneOf([
            'name',
            'director',
            'genre',
            'trailer'
      ]), PropTypes.string]),
      itemRef: PropTypes.string,
      itemScope: PropTypes.any,
      itemType: PropTypes.string,
      lang: PropTypes.oneOfType([PropTypes.oneOf([
            'ar-SA',
            'cs-CZ',
            'da-DK',
            'de-DE',
            'el-GR',
            'en-AU',
            'en-GB',
            'en-IE',
            'en-US',
            'en-ZA',
            'es-ES',
            'es-MX',
            'fi-FI',
            'fr-CA',
            'fr-FR',
            'he-IL',
            'hi-IN',
            'hu-HU',
            'id-ID',
            'it-IT',
            'ja-JP',
            'ko-KR',
            'nl-BE',
            'nl-NL',
            'no-NO',
            'pl-PL',
            'pt-BR',
            'pt-PT',
            'ro-RO',
            'ru-RU',
            'sk-SK',
            'sv-SE',
            'th-TH',
            'tr-TR',
            'zh-CN',
            'zh-HK',
            'zh-TW'
      ]), PropTypes.string]),
      nonce: PropTypes.string,
      part: PropTypes.oneOfType([PropTypes.bool, PropTypes.any]),
      slot: PropTypes.string,
      spellCheck: PropTypes.bool,
      style: PropTypes.object,
      tabIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      title: PropTypes.string,
      translate: PropTypes.oneOfType([PropTypes.oneOf([
            'yes',
            'no'
      ]), PropTypes.string]),
      virtualKeyBoardPolicy: PropTypes.oneOfType([PropTypes.oneOf([
            'auto',
            'manual'
      ]), PropTypes.string]),
      'x-ms-acceleratorkey': PropTypes.string,
      'x-ms-format-detection': PropTypes.string,


}

export default globalAttrType;