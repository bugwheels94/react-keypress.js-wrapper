import React, { useContext, useEffect, useState } from 'react';
import { Listener } from 'keypress.js'

const KeyboardShortcutsContext = React.createContext({
  combos: [],
  setCombos: ()=>{}
});
var listener = new Listener()

export const KeyboardShortcutsProvider = ({
  children
}) => {
  const [combos, setCombos ] = useState([]);
  return (
    <KeyboardShortcutsContext.Provider value={{ combos, setCombos }}>
      {children}
    </KeyboardShortcutsContext.Provider>
  );
}

export const withKeyboardShortcuts = Component => ({ ...props }) => {
  const { combos } = useContext(KeyboardShortcutsContext);
  return <Component  keyboardShortcuts={combos} {...props} />
};

export const KeyboardShortcuts = ({ combo, callback, description }) => {
  const { setCombos } = useContext(KeyboardShortcutsContext);
  useEffect(() => {
    const comboID = listener.simple_combo(combo, callback);
    setCombos(combos => [...combos, {
      textID: `value${Math.random()}`,
      value: combo,
      description,
      comboID
    }])
    //cleanup
    return () => {
      listener.unregister_combo(comboID)
      setCombos(combos => combos.filter(kpCombo => kpCombo.comboID !== comboID))
    }
  }, [])
  return <></>
};
