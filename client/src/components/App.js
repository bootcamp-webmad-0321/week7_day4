import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './layout/Footer/Footer'
import Navigation from './layout/Navigation/Navigation'

import Routes from './routes/Routes'

const App = () => {
  return (

    <>
      <Navigation />

      <main>
        <Routes />
      </main>

      <Footer />

    </>

  )
}

export default App