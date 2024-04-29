import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Carrera from "./screens/Carrera";
import Supervisor from "./screens/Supervisor";
import Persona from "./screens/Persona";
import Proyecto from "./screens/Proyecto";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Carrera" component={Carrera} />
                <Stack.Screen name="Supervisor" component={Supervisor} />
                <Stack.Screen name="Persona" component={Persona} />
                <Stack.Screen name="Proyecto" component={Proyecto} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
