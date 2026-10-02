"use client";
import styled from "styled-components";
import Row from "../../common/Row";
import GetStarted from "./GetStarted";
import { Colors } from "@/src/statics/colors";
const ChatPageEl = styled(Row)`
  position: relative;
  width: 100svw;
  min-height: 100svh;
  height: fit-content;
  color: ${Colors.White};
`;

export default function ChatPage() {
  return (
    <ChatPageEl>
      <GetStarted active={true} setPrompt={() => {}} />
    </ChatPageEl>
  );
}
