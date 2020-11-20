function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { useContext, useEffect, useState } from 'react';
import { Listener } from 'keypress.js';
const KeyboardShortcutsContext = /*#__PURE__*/React.createContext({
  combos: [],
  setCombos: () => {}
});
var listener = new Listener();
export const KeyboardShortcutsProvider = ({
  children
}) => {
  const [combos, setCombos] = useState([]);
  return /*#__PURE__*/React.createElement(KeyboardShortcutsContext.Provider, {
    value: {
      combos,
      setCombos
    }
  }, children);
};
export const withKeyboardShortcuts = Component => ({ ...props
}) => {
  const {
    combos
  } = useContext(KeyboardShortcutsContext);
  return /*#__PURE__*/React.createElement(Component, _extends({
    keyboardShortcuts: combos
  }, props));
};
export const KeyboardShortcuts = ({
  combo,
  callback,
  description
}) => {
  const {
    setCombos
  } = useContext(KeyboardShortcutsContext);
  useEffect(() => {
    const comboID = listener.simple_combo(combo, callback);
    setCombos(combos => [...combos, {
      textID: `value${Math.random()}`,
      value: combo,
      description,
      comboID
    }]); //cleanup

    return () => {
      listener.unregister_combo(comboID);
      setCombos(combos => combos.filter(kpCombo => kpCombo.comboID !== comboID));
    };
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null);
};