"use client";
import styled from "styled-components";
import Row from "../../common/Row";
import GetStarted from "./GetStarted";
import { Colors } from "@/src/statics/colors";
import useChat from "@/src/hooks/useChat";
import ChatInput from "../../common/input/ChatInput";

const ChatPageEl = styled(Row)`
  position: relative;
  width: 100svw;
  min-height: 100svh;
  height: fit-content;
  color: ${Colors.White};
`;

export default function ChatPage() {
  const {
    setInput,
    stage,
    inputRef,
    isLoading,
    handleSubmit,
    handleInputChange,
    messages,
    input,
  } = useChat();

  const canSend = !isLoading && typeof input === "string" && input.length > 0;

  return (
    <ChatPageEl>
      <GetStarted active={stage === "GET_STARTED"} setPrompt={setInput} />
      <ChatInput
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        isLoading={isLoading}
        messageCount={messages.length}
        prompt={input}
        canSend={canSend}
      />
    </ChatPageEl>
  );
}
