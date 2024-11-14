import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type StackParamList = {
  Home: undefined;
  Profile: { name: string };
  Feed: undefined;
};

export type HomeNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Home"
>;

export type HomeScreenProps = {
  navigation: HomeNavigationProps;
};

export type ProfileNavigationProps = NativeStackNavigationProp<
  StackParamList,
  "Profile"
>;

export type ProfileScreenProps = {
  navigation: ProfileNavigationProps;
  route: RouteProp<StackParamList, "Profile">;
};
