"use client";

import styled from "styled-components";
import Row from "../Row";
import { RefObject } from "react";
import Spinner from "../Spinner";
import SendBtn from "./SendBtn";
import { Colors } from "@/src/statics/colors";

const ChatInputEl = styled(Row)<{ $hasMessage: boolean }>`
position: fixed;
bottom: 0;
z-index: 2;
width: 100%;
gap: 10px;
flex-direction: column;
margin-top: auto;
min-height: fit-content;|
height: fit-content;
transition: all 0.15s;
padding-bottom: ${(p) => (p.$hasMessage ? "20px" : "100px")};
`;
const HolderEl = styled.div<{ $chatting: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${Colors.Background};
  width: ${(p) => (p.$chatting ? "calc(100svw - 40px)" : "70%")};
  margin: 0 auto;
  border-radius: 10px;
  padding: 10px 0;
  padding-right: 20px;
  outline: 2px solid ${Colors.Primary};
  gap: 10px;
  color: ${Colors.White};
  overflow: visible auto;

  & > #CHAT_INPUT {
    all: unset;
    color: ${Colors.White};
    width: 100%;
    margin-left: 20px;
    font-size: 1.2rem;
    max-height: 30px;
    position: relative;
  }
`;
const CharacterConterEl = styled(Row)`
  margin: 0 auto;
  font-weight: 400;
  font-size: 0.8rem;
  color: ${Colors.White};
  width: fit-content;
  background-color: ${Colors.Primary};
  padding: 2px 8px;
  gap: 3px;
  border-radius: 10px;
`;

export default function ChatInput({
  prompt,
  inputRef,
  messageCount,
  handleSubmit,
  canSend,
  isLoading,
  handleInputChange,
}: {
  prompt: string;
  inputRef: RefObject<HTMLInputElement | null>;
  messageCount: number;
  handleSubmit: Function;
  canSend: boolean;
  isLoading: boolean;
  handleInputChange: any;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <ChatInputEl $hasMessage={messageCount > 0} onKeyDown={handleKeyDown}>
      {prompt.length > 0 ? (
        <CharacterConterEl>
          <span>{prompt.length}</span>
        </CharacterConterEl>
      ) : (
        ""
      )}

      <HolderEl $chatting={messageCount > 0}>
        <input
          ref={inputRef}
          disabled={isLoading}
          id="CHAT_INPUT"
          value={prompt}
          onChange={handleInputChange}
          placeholder="Ask me about stuff"
        />
        {isLoading ? (
          <Spinner size="2rem" />
        ) : (
          <SendBtn handleSubmit={handleSubmit} canSend={canSend} />
        )}
      </HolderEl>
    </ChatInputEl>
  );
}
