"use client";

import styled from "styled-components";
import Row from "../../common/Row";
import Prompts from "@/src/statics/prompts";
import { Colors } from "@/src/statics/colors";

const GetStartedEl = styled(Row)<{ $active: boolean }>`
  position: absolute;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: fit-content;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -80%);
  display: ${(p) => (p.$active ? "flex" : "none")};
  gap: 30px;
`;

const TitleEl = styled.h1`
  font-size: 5rem;
  color: ${Colors.White};
`;
const HolderEl = styled(Row)`
  align-items: center;
  width: 100%;
  gap: 18px;
  flex-direction: column;
`;
const SugEl = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  user-select: none;
  cursor: pointer;
  height: 80px;
  transition: all 0.15s;
  text-align: left;
  border: 1px solid ${Colors.White};
  gap: 10px;

  & > div {
    &:first-child {
      color: ${Colors.White};
      font-size: 0.8rem;
      font-weight: bold;
    }

    &:last-child {
      color: ${Colors.Primary};
      font-size: 0.8rem;
    }
  }

  &:hover {
    transform: translateY(-8px);
    background-color: ${Colors.White};

    & > div {
      &:first-child {
        color: ${Colors.Primary};
      }

      &:last-child {
        color: ${Colors.Background};
      }
    }
  }
`;

export default function GetStarted({
  active,
  setPrompt,
}: {
  active: boolean;
  setPrompt: Function;
}) {
  return (
    <GetStartedEl $active={active}>
      <Row $fd="column">
        <TitleEl>ChatBot</TitleEl>
      </Row>
      <HolderEl>
        {Prompts.map((p) => {
          return (
            <SugEl key={p.id} onClick={() => setPrompt(p.prompt)}>
              <div>{p.title}</div>
              <div>
                {p.prompt.length > 30
                  ? p.prompt.substring(0, 30) + "..."
                  : p.prompt}
              </div>
            </SugEl>
          );
        })}
      </HolderEl>
    </GetStartedEl>
  );
}
