import { makeStyles } from "tss-react/mui";

import { TRANSITION_ANIMATION } from "../../utils/constants";

export const useStyles = makeStyles()((theme) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  paper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor:
      theme.palette.mode === "dark" ? "#333" : "rgba(255, 255, 255, .87)",
    transition: `background-color ${TRANSITION_ANIMATION}`,
  },
  tableContainer: {
    flex: "1 1 auto",
    color: theme.palette.mode === "dark" ? "#FFF" : "#333",
    transition: `color ${TRANSITION_ANIMATION}`,
    "& .MuiTableCell-root": {
      padding: "5px 16px",
    },
  },
  pagination: {
    flex: "1 0 auto",
    "& .MuiTablePagination-toolbar": {
      minHeight: "38px",
      " & .MuiTablePagination-displayedRows": {
        margin: "8px 0",
        height: "20px",
      },
    },
  },
  paginationActions: {
    flexShrink: 0,
    marginLeft: theme.spacing(2),
    "& .MuiIconButton-root": {
      padding: "6px 8px",
    },
  },
}));
