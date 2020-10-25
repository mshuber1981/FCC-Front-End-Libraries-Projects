import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clockSelector } from "./clockSlice";

const Clock = () => {
  const {} = useSelector(clockSelector);
  const dispatch = useDispatch();

  return <></>;
};

export default Clock;
