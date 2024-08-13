import React, { type ReactElement } from 'react'
import './locales/i18n'
import './style.css'
import Pages from './pages'

function App (): ReactElement {
  const styles = {
    app: {
      backgroundColor: '#F0F4FF',
      minHeight: '100%'
    }
  }

  return (
    <div style={styles.app}>
      <header className="App-header">
          <Pages />
      </header>
    </div>
  )
}

export default App
