import { Typography } from "@mui/material";
import { Fragment, ReactNode, useEffect, useState } from "react";

import logo from "../../assets/logo.png";
import line from "../../assets/line.png";
import { useLocation } from "react-router-dom";
import { AppBar, ImageIcon, Main, Sitebar, Toolbar } from "../common";
import { menus } from "../../lib/config";
import { ToolbarEnd } from "./ToolbarEnd";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <Fragment>
      <AppBar elevation={0} open={open}>
        <Toolbar start={<></>} end={<ToolbarEnd />} />
      </AppBar>
      <Sitebar
        menus={menus}
        logo={<ImageIcon src={logo} width="35px" height="35px" />}
        headerLine={<ImageIcon src={line} width="100%" height="4px" />}
        projectName={
          <Typography fontWeight={500} fontSize={16}>
           [App Name] 
          </Typography>
        }
        location={location.pathname}
        open={open}
        setOpen={setOpen}
      />
      <Main open={open}>{children}</Main>
    </Fragment>
  );
};
