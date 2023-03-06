import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import "../Cssfiles/GoToTop.css";
import { FaArrowUp } from "react-icons/fa";


const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behaviour: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 700;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <>
      <Wrapper>
        {/* <SpeedDialTooltipOpen/> */}
        {isVisible && (
          <div className="top-btn" onClick={goToBtn}>
            <FaArrowUp className="top-btn--icon" />
          </div>
        )}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  .top-btn {
    font-size: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    color: #fff;
    background-color: #0e5176;
    box-shadow: 0px 0px 20px #0e5176;
    border-radius: 50%;
    position: fixed;
    bottom: 5.5rem;
    right: 2.5rem;
    z-index: 99999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: GoToTop 1.2s linear infinite alternate-reverse;
    }

    @keyframes GoToTop {
      0 {
        transform: translateY(0.2rem);
      }

      100% {
        transform: translateY(0.5rem);
      }
    }
  }

  @media (max-width: 768px) {
    .top-btn {
      font-size: 1rem;
      width: 2.5rem;
      height: 2.5rem;
      bottom: 4.5rem;
      right: 0.9rem;

      &--icon {
        animation: GoToTop 1.2s linear infinite alternate-reverse;
      }

      @keyframes GoToTop {
        0 {
          transform: translateY(0.2rem);
        }

        100% {
          transform: translateY(0.5rem);
        }
      }
    }

    ${
      "" /* .Float-btn {
      font-size: 1.5rem;
      width: 3rem;
      height: 3rem;
      bottom: 8.9rem;
      right: 1rem;
      position: fixed;
    } */
    }
  }
`;
export default GoToTop;
