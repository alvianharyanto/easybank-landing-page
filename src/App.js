import GlobalStyles from './Global';
import Theme from './Themes';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Theme>
        <GlobalStyles />
        <Nav />
        <Header />
        <Main />
        <Footer />
      </Theme>
    </div>
  );
}

export default App;
