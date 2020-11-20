import { useState } from 'react';
import { KeyboardShortcuts } from '../lib/KeyboardShortcuts'
import Box from './shared/Box';

function BlueShortcutComponent() {
  const [color, setColor ]= useState('#00bfff')
  const [hidden, setHidden ]= useState(false)
  return (
    <>
      { !hidden && <KeyboardShortcuts combo="shift b" callback={()=>setColor('#0000ff')} description="Press to change to Dark Blue Color" /> }
      <KeyboardShortcuts combo="shift x" callback={()=>setHidden(true)} description="Remove Color Change Shortcut associated with BLUE Box" />
      <Box style={{backgroundColor: color}}>
        BLUE COMPONENT
      </Box>
    </>
  );
}

export default BlueShortcutComponent
