import { useEffect, useRef, useState } from "react";
import { useChat as useAIChat } from "@ai-sdk/react";

export type CHAT_STATE = "GET_STARTED" | "CHAT";

export default function useChat() {
  //manage the state of the chat
  const [stage, setStage] = useState<CHAT_STATE>("GET_STARTED");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [input, setInput] = useState("");

  const { error, stop, setMessages, messages, sendMessage, status } = useAIChat(
    {
      onError: (err) => {
        console.log("USE CHAT ERROR", err.message);
      },
    },
  );

  const isLoading = status === "submitted" || status === "streaming";

  const reset = () => {
    stop();
    setInput("");
    setMessages([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim() !== "") {
      sendMessage({ text: input });
      setInput("");
    }
  };

  const focusPrompt = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  //scroll to end when new message is added
  useEffect(() => {
    if (messages.length > 0) {
      setStage("CHAT");
      if (typeof window !== "undefined") {
        document
          .getElementById("chatbot-root")
          ?.scrollTo({ top: 100000, behavior: "smooth" });
      }
    } else {
      setStage("GET_STARTED");
    }
  }, [messages]);

  //Focus on input when loading changes
  useEffect(() => {
    if (!isLoading) {
      focusPrompt();
    }
  }, [isLoading]);

  return {
    messages,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
    reset,
    inputRef,
    stage,
    stop,
  };
}
