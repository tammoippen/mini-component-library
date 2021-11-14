import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.span`
  position: relative;
  width: var(--width);

  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
  }
`;

const LabelWrapper = styled.span`
  min-width: 130px;
  display: inline-block;
  padding-right: 4px;
  font-weight: 500;
  font-size: ${20 / 16}rem;
  color: ${COLORS.black};
  vertical-align: bottom;
`;

const MyIcon = styled(Icon)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
`;

const Input = styled.input`
  border-top: 0;
  border-bottom: var(--border-size) solid black;
  border-left: 0;
  border-right: 0;
  padding-left: var(--padding-left);
  padding-top: 4px;
  padding-bottom: 4px;

  font-size: var(--font-size);
  font-weight: 700;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 2px;
    outline-style: solid;
    outline-width: 2px;
    border-radius: 2px;
  }

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;

const Sizes = {
  small: {
    iconSize: 14,
    strokeWidth: 1,
    paddingLeft: "20px",
    fontSize: 14,
  },
  large: {
    iconSize: 20,
    strokeWidth: 2,
    paddingLeft: "30px",
    fontSize: 18,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const s = Sizes[size];

  return (
    <label>
      <LabelWrapper>{label}</LabelWrapper>
      <Wrapper
        style={{
          "--width": width + "px",
          "--padding-left": s.paddingLeft,
          "--font-size": s.fontSize / 16 + "rem",
          "--border-size": s.strokeWidth + "px",
        }}
      >
        <Input type="text" placeholder={placeholder} />
        <MyIcon id={icon} size={s.iconSize} strokeWidth={s.strokeWidth} />
      </Wrapper>
    </label>
  );
};

export default IconInput;
