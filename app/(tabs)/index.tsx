import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-4xl font-bold text-foreground">Recurrly</Text>

      <Link
        href="/onboarding"
        className="mt-8 rounded-full bg-primary p-4 text-center text-background"
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded-full bg-primary p-4 text-center text-background"
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded-full bg-primary p-4 text-center text-background"
      >
        Sign Up
      </Link>
      <Link
        href={{
          pathname: "/subscriptions/[id]",
          params: { id: "spotify" },
        }}
        className="mt-4 rounded-full bg-primary p-4 text-center text-background"
      >
        Spotify Subscription
      </Link>
    </SafeAreaView>
  );
}
