"use client";

import { Colors } from "@/src/statics/colors";
import styled from "styled-components";
import { FaCircleArrowUp } from "react-icons/fa6";

const SendBtnEl = styled.button<{ $isactive: boolean }>`
  all: unset;
  position: sticky;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: all 0.3s;
  color: ${(p) => (p.$isactive ? Colors.Primary : Colors.White)};
  cursor: ${(p) => (p.$isactive ? "pointer" : "default")};
  box-shadow: ${(p) =>
    p.$isactive
      ? `${Colors.Primary} 0px 0px 10px
    `
      : ""};

  &:hover {
    transform: scale(${(p) => (p.$isactive ? 1.1 : 1)});
  }
`;

export default function SendBtn({
  handleSubmit,
  canSend,
}: {
  handleSubmit: any;
  canSend: boolean;
}) {
  return (
    <SendBtnEl $isactive={canSend} onClick={handleSubmit}>
      <FaCircleArrowUp />
    </SendBtnEl>
  );
}
