import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function Blog() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 align="center">Our Blog</h1>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Differences between JavaScript and Node.js?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>JavaScript </strong> is a programming language that is used
            for writing scripts on the website,It is basically used on the
            client side,It is the upgraded version of ECMA script that uses
            chrome,s V8 enging writing in C++.JavaScript is used in frontend
            development<strong>Node js </strong> is a javascript runtime
            environment,It is mostly used on the server side.Node js is writing
            in C++,C and javascript.Node js is used in server-side development
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>
            When should use node js and when should use mongoDB ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            I have to use Node js when I have to build server side and different
            types of API,s, And whenever I need to stored user data something
            somewhere so that it is not lost, I have to use the MongoDB
            database.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>
            {" "}
            Differences between sql and nosql databases ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <strong>SQL </strong> database have fixed or static or predefined
            schema.and the database are not suitable for hierarchical data
            stored and sql databases are best suitable for complex queries and
            vertically scalable.
            <strong>NoSQL </strong> database are dynamic schema.the database are
            best suitable for hierarchical data storage and nosql databases are
            not so good for complex queries and Horizontal scalable
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>
            {" "}
            What is the purpose of jwt and how does it work ?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In short ,JWT are used as a secure way to authenticate users and
            share information,Typically a private key or secret is used by the
            issue to sing the JWT.The reciver of the JWT will verify the
            signature by the ussuer.
            <p>
              JWT different from other werb tokens in that they contain a set of
              claims.Clamis are userd to transmit information between two
              parties.What these claims are deppends on the user case at hand.
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
