import { useState } from 'react';
import { KeyboardShortcuts } from '../lib/KeyboardShortcuts'
import Box from './shared/Box';

function GreenShortcutComponent() {
  const [color, setColor ]= useState('#33ff33')
  return (
    <>
      <KeyboardShortcuts combo="shift g" callback={()=>setColor('#019f66')} description="Press to change to Dark Green Color">
      </KeyboardShortcuts>
      <Box style={{backgroundColor: color}}>
        GREEN COMPONENT
      </Box>
    </>
  );
}

export default GreenShortcutComponent
