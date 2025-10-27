import React from "react";
import { Alert, Dimensions, StyleSheet, useColorScheme, View } from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { Avatar, Button, Divider, Text } from "react-native-paper";
import HomeScreen from "../Screens/HomeScreen";
import TestScreen from "../Screens/TestScreen";

const { width } = Dimensions.get("window");

export type DrawerParamList = {
  Home: undefined;
  Test: undefined; // Here the name of the screen is needed to be "Test" to match the Drawer.Screen name
  //add more screens here as needed
  // you can define params for each screen if needed
};

const Drawer = createDrawerNavigator<DrawerParamList>();

export default function DrawerNavigator() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: isDark ? "#1c1c1c" : "#ffffff",
          width: width * 0.75,
        },
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "600",
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerLabel: "Home",
          headerTitleStyle: { fontWeight: "700", fontSize: 20 },
        }}
      />

      <Drawer.Screen
        name="Test"
        component={TestScreen}
        options={{
          drawerLabel: "Test",
          headerTitleStyle: { fontWeight: "700", fontSize: 20 },
        }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawer(props: any) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const getInitials = (email: string) => (email ? email.substring(0, 2).toUpperCase() : "U");

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Avatar.Text
          label={getInitials("animesh@gmail.com")}
          size={64}
          style={{
            backgroundColor: isDark ? "#3949ab" : "#1e40af",
          }}
        />
        <View style={{ marginLeft: 12 }}>
          <Text variant="titleMedium" style={{ fontWeight: "700", color: isDark ? "#fff" : "#111" }}>
            Animesh
          </Text>
          <Text variant="bodySmall" style={{ color: isDark ? "#bbb" : "#555" }}>
            animesh@gmail.com
          </Text>
        </View>
      </View>

      <Divider style={{ marginVertical: 12 }} />

      {/* Drawer Items */}
      <DrawerItemList {...props} />

      <Divider style={{ marginVertical: 16 }} />

      {/* Logout */}
      <Button
        icon="logout"
        mode="contained"
        onPress={() => Alert.alert("Logout", "You have logged out successfully.")}
        buttonColor={"#e53935"}
        textColor="#fff"
        style={styles.logoutButton}
      >
        Logout
      </Button>

      {/* Footer */}
      <Text style={[styles.footerText, { color: isDark ? "#777" : "#666" }]}>
        © {new Date().getFullYear()} <Text style={{ fontWeight: "bold" }}>AON DIGICON LLP</Text>
      </Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  logoutButton: {
    marginTop: 12,
    borderRadius: 8,
  },
  footerText: {
    textAlign: "center",
    fontSize: 11,
    marginTop: 20,
  },
});
