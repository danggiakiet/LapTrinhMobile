import Navigation from "./Navigation";
import 'react-native-gesture-handler';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";


//Tạo store
const store = createStore(reducer)

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
export default App;