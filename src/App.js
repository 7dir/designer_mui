import React from "react";
import { useDrop } from "react-dnd";

import {
  Container,
  Grid,
  Box,
  Paper,
  FormControl,
  FormGroup,
  FormControlLabel,
  Button,
  ButtonGroup,
  Checkbox,
  TextField,
  Switch
} from "@mui/material";

import Item from "./item.js";

import "./styles.css";

const Itemraw = ({ children }) => {
  return <>{children}</>;
};

const elements = [
  {
    name: "Button",
    raw: (
      <FormControl>
        <Button variant="contained">Contained</Button>
      </FormControl>
    )
  },
  {
    name: "ButtonGroup",
    raw: (
      <FormControl>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </FormControl>
    )
  },
  {
    name: "Checkbox",
    raw: <Checkbox />
  }
];

export default function App() {
  const [items, setItems] = React.useState([]);
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: "box",
    drop: (item, monitor) => {
      console.log("item", item);
      setItems((prev) => [...prev, item]);
      // const dropResult = monitor.getDropResult();
      // if (item && dropResult) {
      //   // alert(`You dropped ${item.name} into ${dropResult.name}!`);
      //   console.log("item", item);
      //   console.log("dropResult", dropResult);
      // }
      // return { name: "useDrop name1" };
    },
    // drop: () => ({ name: "useDrop name" }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  }));

  return (
    <div className="App flex-cont">
      <div className="flex-item aside">
        {elements.map((el, index) => (
          <Item key={el.name + index} name={el.name} />
        ))}
      </div>
      <div className="main" ref={drop}>
        <Container maxWidth="sm" sx={{ mt: 2 }}>
          {items.map((item, index) => {
            const t = elements.filter((el) => el.name == item.name)[0];
            return (
              <div key={index} className="flex-item">
                {t.raw}
              </div>
            );
          })}
        </Container>
      </div>
    </div>
  );
}
