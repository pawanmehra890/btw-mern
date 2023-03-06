import React, { useState } from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import styled from "styled-components";
// import "../Cssfiles/GoToTop.css";
import CallIcon from "@mui/icons-material/Call";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GoToTop from "./GoToTop";

const actions = [
  { icon: <CallIcon style={{ color: "green" }} />, name: "Call" },
  { icon: <WhatsAppIcon style={{ color: "green" }} />, name: "WhatsApp" },
];

export default function Floating() {
  const [direction, setDirection] = React.useState("left");
  return (
    <>
      <GoToTop />
      <Wrapper>
        <Box className="Float-btn">
          <SpeedDial
            className="speed-dial-icon"
            direction={direction}
            sx={{
              "& .MuiFab-primary": {
                backgroundColor: "#0e5176",
                color: "white",
                width: 40,
                height: 40,
              },
            }}
            ariaLabel="SpeedDial basic example"
            icon={<SpeedDialIcon />}
          >
            {actions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
              />
            ))}
          </SpeedDial>
        </Box>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .Float-btn {
    position: fixed;
    bottom: 2rem;
    right: 2.5rem;
    z-index: 9999;
    display: flex;
  }

  .MuiFab-primary:hover {
    background-color: #0e5176;
  }

  @media (max-width: 768px) {
    .Float-btn {
      font-size: 0.2rem;
      z-index: 999;
      ${
        "" /* width: 0.5rem;
      height: 0.5rem; */
      }
      bottom: 1rem;
      right: 0.9rem;
      position: fixed;
    }
  }
`;
