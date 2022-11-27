import './App.css';
import Header from "./components/Layout/Header/Header";
import Main from './components/Layout/Main/Main';
import { StoreProvider } from './store/storeProvider';

function App() {
  return (
    <StoreProvider>
      <Header />
      <Main />
    </StoreProvider>
  );
}

export default App;
