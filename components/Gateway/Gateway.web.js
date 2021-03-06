import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";
import { deviceType } from "detect-it";
import styles from "./styles";
import Peek from "../Peek";
import Text from "../Text";
import Content from "../Content";
import Line from "../Line";
import Link from "../Link";

export default function Gateway() {
  const [isPeekVisible, setIsPeekVisible] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: isPeekVisible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [isPeekVisible, fadeAnim]);

  const { heading } = styles();

  return (
    <Content>
      <Line>
        <Text color="orange" style={heading}>
          {"<"}
        </Text>
        <View>
          <Animated.View style={{ opacity: fadeAnim }}>
            {deviceType === "mouseOnly" && <Peek />}
          </Animated.View>
          <Link
            style={heading}
            href="/code"
            onHoverIn={() => {
              setIsPeekVisible(true);
            }}
            onHoverOut={() => {
              setIsPeekVisible(false);
            }}
          >
            ASGB
          </Link>
        </View>
        <Text color="orange" style={heading}>
          {"\u00A0/>"}
        </Text>
      </Line>
      <Line>
        <Text italic comment style={heading} />
      </Line>
      <Line>
        <Link
          type="comment"
          style={heading}
          href="https://raw.githubusercontent.com/opeologist/opeologist.github.io/mainline/Aaron-Giordano-Barry-Resume.pdf"
        >
          resume
        </Link>
      </Line>
      <Line>
        <Text italic comment style={heading} />
      </Line>
      <Line>
        <Link type="comment" style={heading} href="mailto:email@asgb.me">
          email
        </Link>
      </Line>
      <Line>
        <Text italic comment style={heading} />
      </Line>
      <Line>
        <Link
          type="comment"
          style={heading}
          href="https://www.linkedin.com/in/asgb"
        >
          linkedin
        </Link>
      </Line>
      <Line>
        <Text italic comment style={heading} />
      </Line>
      <Line>
        <Link
          type="comment"
          style={heading}
          href="https://github.com/opeologist/opeologist.github.io"
        >
          source
        </Link>
      </Line>
    </Content>
  );
}
