## Introduction

  This is a library to Bind Keyboard shortcuts to react components

## API

  This library provides 3 components.

  1. Context Provider Component `KeyboardShortcutsProvider`

         import { KeyboardShortcutsProvider } from './components/KeyboardShortcut'

      You need to wrap it at the very top of your React App, preferably `App.js`. This just creates the context and passes it down to your app so that all of the shortcuts are stored somewhere.

  1. HOC Component `withKeyboardShortcuts`

         import { withKeyboardShortcuts } from './components/KeyboardShortcut'

      This is just a higher order component. This will provide all of the current active shortcuts to the passed components.

          function Component({
            keyboardShortcuts
          }) {
            // keyboardShortcuts will be an Array of Objects
            // value is passed shortcut value and 
            // description is passed description value
          }
          withKeyboardShortcuts(Component)

  1. Shortcut Component `KeyboardShortcuts`

         import { KeyboardShortcuts } from './components/KeyboardShortcut'

      Use this component to define the `combo` with the `callback` and the `description`. Use as

         <KeyboardShortcuts combo="shift r" callback={any_function} description="Magical Shortcut" />
