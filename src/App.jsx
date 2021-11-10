import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";
import EmployeeList from "./components/Employee/EmployeeList/EmployeeList";
const App = () => {
  return (
    <div className="App">
      <Header />
      <EmployeeList />
      <Footer />
    </div>
  );
};

export default App;
