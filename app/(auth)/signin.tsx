import { Slot } from "expo-router";
import { Dimensions, KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

const signin = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        className="bg-white h-full"
        keyboardShouldPersistTaps="handled"
      >
         {/* style={{height:Dimensions.get("window")}} */}
        <View className="w-full relative"></View>
      </ScrollView>
      <Slot />
    </KeyboardAvoidingView>
  );
};

export default signin;
