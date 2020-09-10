import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export default function ButtonWithTooltip({ position, ...otherProps }) {
  return (
    <>
      <OverlayTrigger
        key={position}
        placement={position}
        overlay={
          <Tooltip id={`tooltip-${position}`}>
            Tooltip on <strong>{position}</strong>.
          </Tooltip>
        }
      >
        <Button {...otherProps}>Tooltip on {position}</Button>
      </OverlayTrigger>
    </>
  );
}
