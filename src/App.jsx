import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import css from './styles/app.module.scss';
import Experties from './components/Experties/Experties';
import Education from "./components/Education/Education";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from './components/Footer/Footer';

const App = () => {
  return <div className={`bg-primary ${css.container}`}>
<Header/>
<Hero/>
<Experties/>
<Portfolio/>
<Education/>
<Footer/>
  </div>
};

export default App;
