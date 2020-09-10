import React, { useState } from "react";
import { Container, Row, ButtonGroup, Button } from "react-bootstrap";
import ButtonWithTooltip from "./components/ButtonWithTooltip";

const tooltipPositionsAndVariants = [
  ["left", "success"],
  ["right", "warning"],
  ["top", "danger"],
  ["bottom", "info"],
];
function App() {
  const [tooltipPosition, setTooltipPosition] = useState("left");
  const handleButtonClick = (position) => setTooltipPosition(position);
  return (
    <Container>
      <Row>
        <ButtonWithTooltip
          position={tooltipPosition}
          variant="primary"
          className="mt-5 mx-auto"
        />
      </Row>

      <Row className="mt-5">
        <h3 className="mx-auto">
          Choose the tooltip position <em>(Default is left)</em>
        </h3>
      </Row>
      <Row className="mt-5">
        <ButtonGroup className="mx-auto">
          {tooltipPositionsAndVariants.map(
            ([tooltipPosition, variant], index) => (
              <Button
                key={index}
                className="mx-2"
                variant={variant}
                onClick={() => handleButtonClick(tooltipPosition)}
              >
                {tooltipPosition}
              </Button>
            )
          )}
        </ButtonGroup>
      </Row>
    </Container>
  );
}

export default App;
