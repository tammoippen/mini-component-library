/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = ["small", "medium", "large"];
const stylesWrapper = {
  small: {
    "--border-radius": "4px",
    "--height": "8px",
    "--padding": "0px",
  },
  medium: {
    "--border-radius": "4px",
    "--height": "12px",
    "--padding": "0px",
  },
  large: {
    "--border-radius": "8px",
    "--height": "24px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  if (value < 0 || value > 100) {
    throw new Error(`Keep value between 0 and 100: ${value}`);
  }
  if (!SIZES.includes(size)) {
    throw new Error(`Only one of the sizes: '${size}'' not in ${SIZES}`);
  }

  return (
    <Wrapper
      style={stylesWrapper[size]}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <Trimmer>
        <Filler style={{ "--width": value + "%" }}>
          <VisuallyHidden>{value} of 100</VisuallyHidden>
        </Filler>
      </Trimmer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: var(--height);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const Filler = styled.div`
  height: 100%;
  width: var(--width);

  background-color: ${COLORS.primary};
`;

const Trimmer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  overflow: hidden;
`;

export default ProgressBar;
