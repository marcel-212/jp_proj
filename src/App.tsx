import './App.scss'
import Footer from './layout/Footer'
import Header from './layout/Header'
import KanjiList from './sections/KanjiList'

function App() {
  return (
    <>
      <Header/>
      <main>
        <KanjiList/>
      </main>
      <Footer/>
    </>
  )
}

export default App
