"use client";
import { UIMessage } from "ai";
import styled from "styled-components";
import Row from "../Row";
import UserBubble from "./UserBubble";
import ResponseBubble from "./ResponseBubble";

const ChatHolderEl = styled(Row)`
  width: 100%;
  height: fit-content;
  flex-direction: column;
  gap: 20px;
  padding: 20px 20px 130px 20px;
`;

export default function ChatHolder({ messages }: { messages: UIMessage[] }) {
  return (
    <ChatHolderEl id="chatHolder">
      {messages.map((msg) => (
        <div key={msg.id}>
          {msg.role === "user" ? (
            <div>
              {msg.parts.map((part, i) => (
                <UserBubble key={i} part={part} />
              ))}
            </div>
          ) : (
            <div>
              {msg.parts.map((part, i) => (
                <ResponseBubble key={i} part={part} />
              ))}
            </div>
          )}
        </div>
      ))}
    </ChatHolderEl>
  );
}
