import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import appStyles from "./style/App.module.scss";
import "./App.css";
const App = () => {
  return (
    <div className={appStyles.app}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
