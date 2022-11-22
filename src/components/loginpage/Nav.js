import React from "react";
import styled from "styled-components";
import { devices } from '../../data/devices';

export default function Nav(props) {
  const titles = [
    "Home",
    "Summer Camps",
    "March Camps",
    "Winter Camps",
    "PA Day Camps",
    "Register Now",
  ];
  const components = [];
  for (let i = 0; i < titles.length; i++) {
    // each section in the nav bar is given an id 0 - 5
    // id keeps track of which element has been clicked, so that it would be a different color
    components.push(
      <Button
        id={i}
        key = {i}
        state={i === props.focus}
        onClick={() => {
          props.setFocus(i);
          console.log("focus", i)
        }}
        onMouseOver={() => unlight(i)}
        onMouseLeave={() => relight(i)}
      >
        {titles[i]}
      </Button>
    );
  }

  function unlight(i) {
    const curHighlight = document.getElementById(props.focus);
    const hovering = document.getElementById(i);
    curHighlight.style.color = "#FFFFFF";
    hovering.style.color = "#EDD662";
  }
  function relight(i) {

    // need this if statement because when you leave a already focused 
    // header, it will turn it white without it if you hover over it
    if (props.focus === i) return;
    const curHighlight = document.getElementById(props.focus);
    const leaving = document.getElementById(i);
    curHighlight.style.color = "#EDD662";
    leaving.style.color = "#FFFFFF";
  }

  return <Container>{components}</Container>;
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-weight: 900;
  opacity: 0.8;
  background-color: #144257;
  align-items: center;
  @media ${devices.mobile}{
    height: 50px;
  }

  @media ${devices.tablet}{
    height: 75px;
  }
`


const Button = styled.a`
  color: ${(props) => (props.state ? "#EDD662" : "#FFFFFF")};
  cursor: pointer;
  &:hover {
    color: #EDD662;
  }
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
  }
  &:active {
    text-decoration: none;
  }

  @media ${devices.mobile}{
    font-size: 10px;
  }

  @media ${devices.tablet}{
      font-size: 15px;
  }

  @media ${devices.laptop}{
      font-size: 15px;
  }

  @media ${devices.laptopL}{
    font-size: 20px;
  }

`;
