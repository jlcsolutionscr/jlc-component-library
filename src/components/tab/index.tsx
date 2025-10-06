import type { SyntheticEvent } from "react";
import IconButton from "@mui/material/IconButton";

import { useStyles } from "./styles";
import { DeleteIcon } from "../../utils/iconsHelper";

interface TabProps {
  title: string;
  edit: () => void;
  close: () => void;
}

export default function Tab({ title, edit, close }: TabProps) {
  const { classes } = useStyles();
  const onButtonClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    close();
  };
  return (
    <div className={classes.container} onClick={edit}>
      <div className={classes.title}>
        <span>{title}</span>
      </div>
      <div className={classes.actions}>
        <IconButton component="span" onClick={onButtonClick}>
          <DeleteIcon />
        </IconButton>
      </div>
    </div>
  );
}
