import { useState } from 'react';
import { KeyboardShortcuts } from '../lib/KeyboardShortcuts'
import Box from './shared/Box';

function RedShortcutComponent() {
  const [color, setColor ]= useState('#ed988f')
  return (
    <>
      <KeyboardShortcuts combo="shift r" callback={()=>setColor('#ff0000')} description="Press to change to Dark Red Color">
      </KeyboardShortcuts>
      <Box style={{backgroundColor: color}}>
        RED COMPONENT
      </Box>
    </>
  );
}

export default RedShortcutComponent
