import { ThemeProvider } from 'styled-components'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { Container, GlobalStyles } from './global'

import { theme } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
