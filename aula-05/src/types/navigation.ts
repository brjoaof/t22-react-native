import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  Home: undefined;
  Profile: { name: string };
  Feed: undefined;
};

type HomeNavigationProps = NativeStackNavigationProp<StackParamList, "Home">;

export type HomeScreenProps = {
  navigation: HomeNavigationProps;
};

export type ProfileScreenProps = {
  navigation: NativeStackNavigationProp<StackParamList, "Profile">;
  route: RouteProp<StackParamList, "Profile">;
};
