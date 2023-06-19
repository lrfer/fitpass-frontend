import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Trainings from '../pages/Trainings';
import MainPage from '../pages/MainPage';
import Profile from '../pages/Profile';
import UserConfig from '../pages/UserConfig';
import AlterUserData from '../pages/AlterUserData';
import DetalhesTreino from '../pages/DetalhesTreino';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Trainings" component={Trainings} options={{headerShown: false}}/>
            <Stack.Screen name="MainPage" component={MainPage} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="UserConfig" component={UserConfig} options={{headerShown: false}}/>
            <Stack.Screen name="AlterUserData" component={AlterUserData} options={{headerShown: false}}/>
            <Stack.Screen name="DetalhesTreino" component={DetalhesTreino} options={{headerShown: false}}/>
            
        </Stack.Navigator>
    );
}