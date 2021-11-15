import AppContextProvider from "./Context/AppContextProvider";
import AppHeader from "./Components/Layout/AppHeader/AppHeader";
import AppMain from "./Components/Layout/AppMain/AppMain";
import appStyles from "./Style/App.module.scss";
import "./App.css";
const App = () => {
  return (
    <div className={appStyles.app}>
      <AppContextProvider>
        <AppHeader />
        <AppMain />
      </AppContextProvider>
    </div>
  );
};

export default App;
