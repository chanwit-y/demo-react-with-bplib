import {
  createAppBar,
  createMain,
  createToolbar,
  createSidebar,
  createTransitionModal,
  createProfileAvatar,
  createProfileInfo,
  createTextField,
  createAutocomplete,
  createArrowPopover,
  createImageIcon,
  createSelectLabelGroup,
  createFade,
  createLabelTopTextField,
  createArrowAnimate,
} from "@banpudev/react-components";
import { createDomMotionComponent } from "framer-motion";
import {
  styled,
  AppBar as MuiAppBar,
  Toolbar as MuiToolbar,
  Modal as MuiModal,
  Autocomplete as MuiAutocomplete,
  TextField as MuiTextField,
  CircularProgress,
  Typography,
  Box,
  Drawer,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Popover,
  MenuItem,
  Fade,
  Avatar,
  Divider,
  Select,
} from "@mui/material";
import {Link} from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import CancelIcon from "@mui/icons-material/Cancel";
import ArrowIcon from "@mui/icons-material/DoubleArrow";
import ExpandMore from "@mui/icons-material/ExpandMore";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpIcon from "@mui/icons-material/Help";

const MotionDiv = createDomMotionComponent("div");
const Modal = styled(MuiModal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: 10,
});
const sidebarOption = {
  styled,
  MotionDiv,
  Drawer,
  Box,
  IconButton,
  Collapse,
  Link,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ArrowIcon,
  ExpandMore,
  Popover,
  MenuItem,
  drawerWidth: 250,
  colorActiveBorder: "#5C4AC7",
  colorActive: "#EEEDFD",
  colorInactive: "#fff",
  colorTextGroup: "#515A6E",
  colorText: "#515A6E",
  sizeTextItem: 12,
};


export const ArrowAnimate = createArrowAnimate(MotionDiv, IconButton, KeyboardArrowDownIcon);
export const FadeIn = createFade(MotionDiv);
export const SelectField = createSelectLabelGroup(
  Select,
  MenuItem,
  Box,
  Typography,
  Divider,
  "#5c4ac7"
);
export const ImageIcon = createImageIcon(styled);
export const Autocomplete = createAutocomplete<string>(
  MuiAutocomplete,
  MuiTextField,
  Box,
  CircularProgress,
  IconButton,
  DeleteIcon,
  SearchIcon
);
export const TextField = createTextField(MuiTextField);
export const LabelTopTextField = createLabelTopTextField(Box, Typography, TextField);
export const ProfileAvatar = createProfileAvatar({ styled, Avatar });
export const AppBar = createAppBar(styled, MuiAppBar, 250);
export const Main = createMain(styled, 250, 65);
export const Toolbar = createToolbar(MuiToolbar, Box);
export const Sitebar = createSidebar(sidebarOption);
export const ArrowPopover = createArrowPopover(
  MotionDiv,
  Box,
  Popover,
  IconButton,
  KeyboardArrowDownIcon
);
export const ProfileInfo = createProfileInfo(
  Box,
  Typography,
  IconButton,
  LoginIcon
);
export const TransitionsModal = createTransitionModal(
  Modal,
  Fade,
  Box,
  IconButton,
  CancelIcon,
  Typography
);
