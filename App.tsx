import {NavigationContainer} from '@react-navigation/native';
import {Main} from "./src/screens/Main";
import {Provider} from "react-redux";
import {store} from "./src/app/store";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Main/>
            </NavigationContainer>
        </Provider>
    );
}
