import { IGLandingScreen } from './screen/IGLanding'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { ThemeProvider } from './shared/themes/ThemeProvider'
import { IGNavBar } from './shared/components'
import { setConfiguration } from 'react-grid-system';
import createInstance from './config/axios'

function App() {
  setConfiguration({ gutterWidth: '0', gridColumns: 12, containerWidths: [540, 740, 960, 1140, 1656] })
  createInstance(store)
  return (
    <Provider store={store}>
      <ThemeProvider>
        <IGNavBar />
        <IGLandingScreen />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
