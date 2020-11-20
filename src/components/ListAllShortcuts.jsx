
import { withKeyboardShortcuts } from '../lib/KeyboardShortcuts'
import Box from './shared/Box';

function ListAllShortcuts({
  keyboardShortcuts
}) {
  return (
  <Box>{
    keyboardShortcuts.map(combo => <div key={combo.textID}>
      <strong>
        {combo.value}
      </strong> - 
      ( {combo.description} )
    </div>)
  }</Box>
  );
}

export default withKeyboardShortcuts(ListAllShortcuts);
