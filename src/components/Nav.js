import React from "react";
import styled from "styled-components";
import { devices } from '../data/devices';
import "../css/index.css";


export default function Nav(props) {
  const titles = [
    "Home",
    "Summer Camps",
    "March Camps",
    "Winter Camps",
    "PA Day Camps",
    "Register Now",
  ];

  const titlesMobile = [
    "Home", 
    "Camps", 
    "Register Now"
  ];
  var components = [];
  function createButtons() {

    var arr = []
    var width = Math.max(window.screen.width, window.innerWidth);

    arr = (width < 500) ? titlesMobile: titles;
    for (let i = 0; i < arr.length; i++) {
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
          // onMouseOver={() => unlight(i)}
          // onMouseLeave={() => relight(i)}
        >
          {arr[i]}
        </Button>
      );
    }
  }
  createButtons();
  

  // function unlight(i) {
  //   const curHighlight = document.getElementById(props.focus);
  //   const hovering = document.getElementById(i);
  //   curHighlight.style.color = "#FFFFFF";
  //   hovering.style.color = "#EDD662";
  // }
  // function relight(i) {

  //   // need this if statement because when you leave a already focused 
  //   // header, it will turn it white without it if you hover over it
  //   if (props.focus === i) return;
  //   const curHighlight = document.getElementById(props.focus);
  //   const leaving = document.getElementById(i);
  //   curHighlight.style.color = "#EDD662";
  //   leaving.style.color = "#FFFFFF";
  // }

  return <Container> {components} </Container>;
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
    height: 60px;
  }

  @media ${devices.laptop}{
    height: 60px;
  }
`


const Button = styled.a`
  color: ${(props) => (props.state ? "#EDD662" : "#FFFFFF")};
  cursor: pointer;
  font-family: "roboFont";
  text-decoration: none;
  &:focus, &:visited, &:link, &:active {
    text-decoration: none;
  }
  &:hover {
    color: #EDD662;
  }
  @media ${devices.mobile}{
    font-size: 15px;
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
