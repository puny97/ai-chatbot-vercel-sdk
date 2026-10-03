"use client";

import styled from "styled-components";
import Row from "../Row";
import { UIDataTypes, UIMessagePart, UITools } from "ai";
import { Colors } from "@/src/statics/colors";

const ResponseBubbleEl = styled(Row)`
  padding: 10px;
  background-color: ${Colors.Secondary};
  border-radius: 10px;
  width: fit-content;
  margin-right: auto;
  white-space: pre-wrap;
  max-width: calc(100svw - 40px);
`;

export default function ResponseBubble({
  part,
}: {
  part: UIMessagePart<UIDataTypes, UITools>;
}) {
  return (
    <ResponseBubbleEl>
      {part.type === "text" ? part.text : null}
    </ResponseBubbleEl>
  );
}
