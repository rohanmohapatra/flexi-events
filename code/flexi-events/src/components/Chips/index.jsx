import { Chip, Stack, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";

const Chips = ({ defaultChips, max, placeholder, onDelete, onSave }) => {
  const [chips, setChips] = useState(defaultChips);
  const pattern = /[^a-zA-Z0-9 ]/g;
  const key = {
    backspace: 8,
    tab: 9,
    enter: 13,
  };

  const updateChips = (value) => {
    if (chips.length >= max) {
      return;
    }
    if (!value) return;
    let chip = value.trim().toLowerCase();

    if (chip && chips.indexOf(chip) < 0) {
      setChips((chips) => [...chips, chip]);
    }
    onSave(value);
  };
  const deleteChip = (value) => {
    setChips((chips) => chips.filter((chip) => chip !== value));
    onDelete(value);
  };

  const onKeyDown = (event) => {
    let keyPressed = event.which;

    if (
      keyPressed === key.enter ||
      (keyPressed === key.tab && event.target.value)
    ) {
      event?.preventDefault();
      updateChips(event.target.value);
      event.target.value = "";
    } else if (keyPressed === key.backspace) {
      if (!event.target.value && chips.length) {
        deleteChip(chips[chips.length - 1]);
      }
    }
  };

  return (
    <Stack direction="row">
      {chips.map((chip) => (
        <Chip
          label={chip}
          key={chip}
          onDelete={(event) => deleteChip(chip)}
          sx={{ height: "2.5rem", mx: "0.2rem", fontWeight: 600 }}
          color="primary"
        />
      ))}
      <TextField
        type="text"
        disabled={chips.length === max}
        placeholder={placeholder}
        onKeyDown={onKeyDown}
        size="small"
      />
    </Stack>
  );
};

export default Chips;
