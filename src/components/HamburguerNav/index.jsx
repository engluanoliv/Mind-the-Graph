import { useState } from "react";
import { Icon, BarIcon } from "./styles";

export default function HamburguerNav({ onOpen, ...props }) {
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen((prevOpen) => !prevOpen);
    onOpen();
  }

  return (
    <Icon $device="tablet" open={open} onClick={handleClick} {...props}>
      <BarIcon open={open}></BarIcon>
      <BarIcon open={open}></BarIcon>
      <BarIcon open={open}></BarIcon>
    </Icon>
  );
}
