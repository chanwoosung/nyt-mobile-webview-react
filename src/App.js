import './App.css';
import css from './styles/wrapper.module.css'
import FooterNavBar from './component/footernavbar';
import Category from './component/category';
import Content from './component/content';

function App() {
  return (
    <div className={css.wrapper}>
      <Category />
      <Content />
      <FooterNavBar />
    </div>
  );
}

export default App;
