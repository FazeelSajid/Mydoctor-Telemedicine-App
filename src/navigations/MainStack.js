import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigator from "./BottomTabBar";
import SeeAllDoctors from "../Screens/MainStack/SeeAllDoctors";
import { SCREENS } from "../Constants/Screens";
import DoctorDetails from "../Screens/MainStack/DoctorDetails";
import NewAppointment from "../Screens/MainStack/NewAppointment";
import Notifications from "../Screens/MainStack/Notifications";
import Chat from "../Screens/MainStack/Chat";
import UpdateProfile from "../Screens/MainStack/UpdateProfile";
import Favourites from "../Screens/MainStack/Favourites";
import Settings from "../Screens/MainStack/Settings";
import PaymentOptions from "../Screens/MainStack/PaymentOptions";
import PasswordManager from "../Screens/MainStack/PasswordManager";
import HelpCenter from "../Screens/MainStack/HelpCenter";

const Stack = createNativeStackNavigator()


const MainStack = () =>{
    return (
        <Stack.Navigator screenOptions={{
            // tabBarHideOnKeyboard: true,
            headerShown: false,
           
        }}>   
                    <Stack.Screen name={SCREENS.TABS} component={BottomTabNavigator} />
                    <Stack.Screen name={SCREENS.SEEALLDOCTORS} component={SeeAllDoctors} />
                    <Stack.Screen name={SCREENS.DOCTORDETAILS} component={DoctorDetails} />
                    <Stack.Screen name={SCREENS.NEWAPPOINTMENT} component={NewAppointment} />
                    <Stack.Screen name={SCREENS.NOTIFICATONS} component={Notifications} />
                    <Stack.Screen name={SCREENS.CHAT} component={Chat} />
                    <Stack.Screen name={SCREENS.UPDATEPROFILE} component={UpdateProfile} />
                    <Stack.Screen name={SCREENS.FAVORITES} component={Favourites} />
                    <Stack.Screen name={SCREENS.SETTINGS} component={Settings} />
                    <Stack.Screen name={SCREENS.PAYMENTOPTION} component={PaymentOptions} />
                    <Stack.Screen name={SCREENS.PASSWORDMANAGER} component={PasswordManager} />
                    <Stack.Screen name={SCREENS.HELPCENTER} component={HelpCenter} />
        </Stack.Navigator>
    )
}

export default MainStack;