import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ActionButton({
  onPress,
  styles,
  text,
  color
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iosButton, { backgroundColor: color }]}
    >
      <Text style={styles.submitButtonText}>{text}</Text>
    </TouchableOpacity>
  );
}
