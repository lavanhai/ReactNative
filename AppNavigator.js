import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignIn from './Screens/SigninScreen';
import TabNavigator from './Screens/BottomTab';
import Detail from './Screens/Detail';
import Setting from './Screens/Setting';
import Bill from './Screens/Bill';
const AppNavigator = createStackNavigator({
  SignIn,
  TabNavigator,
  Detail,
  Setting,
  Bill
});
export default createAppContainer(AppNavigator);