import styled from "styled-components";
import { memo } from "react";
import handlerVibrationTg from "@/shared/lib/handlerVibrationTg.js";

const StyledButton = styled.button`
  font: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
  gap: 10px;
  padding: ${({ padding = "8px 0px" }) => padding};
  width: ${({ maxwidth = "" }) => maxwidth};
  border-radius: ${({ sizeborder = "8px" }) => sizeborder};
  border: ${({ showborder }) =>
    showborder ? "1px solid var(--border-color)" : "none"};
  &::before {
    border-radius: ${({ sizeborder = "8px" }) => sizeborder};
  }
  &:disabled {
    background: linear-gradient(
      90deg,
      rgb(48, 104, 208) 0%,
      rgb(131, 107, 175) 50%,
      rgb(151, 130, 98) 100%
    );
  }
`;

const Text = styled.span`
  color: var(--color-white);
  font-size: ${({ sizetext = "10px" }) => sizetext};
  ${({ gradient }) =>
    gradient &&
    `
    background: linear-gradient(90deg, rgb(48, 104, 208) 0%, rgb(131, 107, 175) 50%, rgb(151, 130, 98) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  `}
  ${({ disabled }) =>
    disabled &&
    `
    -webkit-text-fill-color: white;
    
  `}
`;

const Icon = styled.img`
  width: ${({ sizeIcon = "24px" }) => sizeIcon};
  height: ${({ sizeIcon = "24px" }) => sizeIcon};
`;

const handleClick = (click, eventclick) => {
  handlerVibrationTg();
  if (click) {
    click((prev) => !prev);
  }
  if (eventclick) {
    eventclick();
  }
};

export const Button = memo(
  ({
    leftItem,
    rightItem,
    click,
    eventclick,
    children,
    showborder,
    sizeborder,
    padding,
    gradient,
    maxwidth,
    sizetext,
    sizeIcon,
    disabled = false,
  }) => {
    return (
      <StyledButton
        onClick={() => handleClick(click, eventclick)}
        {...{
          showborder,
          sizeborder,
          maxwidth,
          padding,
        }}
        disabled={disabled}
        className={`background-br`}
      >
        {leftItem && <Icon src={leftItem} alt="icon" sizeIcon={sizeIcon} />}
        {children && (
          <Text disabled={disabled} gradient={gradient} sizetext={sizetext}>
            {children}
          </Text>
        )}
        {rightItem && <Icon src={rightItem} alt="icon" sizeIcon={sizeIcon} />}
      </StyledButton>
    );
  }
);
