import React, { useContext } from "react";
import { Platform, View } from "react-native";
import styles from "./styles";
import { ARContext } from "../../contexts";
import { backgroundColor } from "../../constants";

let ViroFlexView;

if (Platform.OS !== "web") {
  ViroFlexView = require("@viro-community/react-viro").ViroFlexView;
}

export default function Box({ style, ...rest }) {
  const { ready } = useContext(ARContext);

  const { container } = styles();

  if (ready) {
    return (
      <ViroFlexView
        position={[0, -10, -5]}
        rotation={[0, 0, 0]}
        transformBehaviors={["billboardX"]}
        width={6.8}
        height={6.25}
        {...{ backgroundColor, style }}
        {...rest}
      />
    );
  }

  return <View style={[container, style]} {...rest} />;
}
