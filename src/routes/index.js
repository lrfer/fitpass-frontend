import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../pages/Login';
import Welcome from '../pages/Welcome';
import Register from '../pages/Register';
import Trainings from '../pages/Trainings';
const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={Welcome} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
            <Stack.Screen name="Trainings" component={Trainings} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}