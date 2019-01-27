import {createAppContainer, createSwitchNavigator, createStackNavigator} from "react-navigation";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

const MainStack = createStackNavigator({
	Home: HomeScreen
})

const AppNavigator = createSwitchNavigator({
	Login: LoginScreen,
	Main: MainStack
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;