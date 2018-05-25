import React, { Component } from "react";
import { TouchableOpacity, Text } from "react-native";

export default function SubmitButton({ onPress, style }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles}>Submit</Text>
    </TouchableOpacity>
  );
}
