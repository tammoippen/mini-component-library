import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const InvisibleSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  /* appearance: none; */
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: max-content;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

const PresentationalLayer = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  font-size: ${16 / 16}rem;
  padding: 12px 52px 12px 16px;
  border-radius: 8px;
  font-weight: 400;
  /* font-family: Roboto, sans-serif; */

  ${InvisibleSelect}:focus + & {
    outline: 1px dashed #212121;
    outline: 2px auto Highlight;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${InvisibleSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <InvisibleSelect value={value} onChange={onChange}>
        {children}
      </InvisibleSelect>
      <PresentationalLayer>
        {displayedValue}

        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon size={24} strokeWidth={2} id="chevron-down" />
        </IconWrapper>
      </PresentationalLayer>
    </Wrapper>
  );
};

export default Select;
