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
`;

const Icon = styled.img`
  width: ${({ sizeIcon = "24px" }) => sizeIcon};
  height: ${({ sizeIcon = "24px" }) => sizeIcon};
`;

const handleClick = (click) => {
  handlerVibrationTg();
  if (click) {
    click((prev) => !prev);
  }
};

export const Button = memo(
  ({
    leftItem,
    rightItem,
    click,
    children,
    showborder,
    sizeborder,
    padding,
    gradient,
    maxwidth,
    sizetext,
    sizeIcon,
  }) => {
    return (
      <StyledButton
        onClick={() => handleClick(click)}
        {...{
          showborder,
          sizeborder,
          maxwidth,
          padding,
        }}
        className={`background-br`}
      >
        {leftItem && <Icon src={leftItem} alt="icon" sizeIcon={sizeIcon} />}
        {children && (
          <Text gradient={gradient} sizetext={sizetext}>
            {children}
          </Text>
        )}
        {rightItem && <Icon src={rightItem} alt="icon" sizeIcon={sizeIcon} />}
      </StyledButton>
    );
  }
);
