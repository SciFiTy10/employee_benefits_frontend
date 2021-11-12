import AppContextProvider from "./Context/AppContextProvider";
import Header from "./Components/Layout/Header/Header";
import Main from "./Components/Layout/Main/Main";
import appStyles from "./Style/App.module.scss";
import "./App.css";
const App = () => {
  return (
    <div className={appStyles.app}>
      <AppContextProvider>
        <Header />
        <Main />
      </AppContextProvider>
    </div>
  );
};

export default App;
