import "@/global.css";
import { Link } from "expo-router";
import { View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white px-4 pt-16">
        <text className="text-4xl font-bold text-black">Recurrly</text>
      <Link href="/onboarding" className="mt-8 rounded-lg bg-gray-200 p-4 text-center">
        onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded-lg bg-white/10 p-4 text-center">
        Sign In
      </Link>
      <Link href="/(auth)/sign-up" className="mt-4 rounded-lg bg-white/10 p-4 text-center">
        Sign Up
      </Link>
      <Link href= {{
                pathname: "/subscriptions/[id]",
                params: { id: "spotify" },
      }} className="mt-4 rounded-lg bg-white/10 p-4 text-center">Spotify Subscription
      </Link></View>
  ) };