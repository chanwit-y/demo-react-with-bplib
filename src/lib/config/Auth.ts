import {
  AuthComponoentBuilder,
  createAuthContext,
  getAuthProvider,
} from "@banpudev/react-auth";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
} from "@mui/material";
import { UserProfile } from "../model/UserProfile";
import WarningIcon from "@mui/icons-material/WarningRounded";
import ErrorIcon from "@mui/icons-material/ErrorOutline";

const authContext = createAuthContext<UserProfile>();

const { AuthProvider, useAuth } = getAuthProvider(authContext);

export { AuthProvider, authContext, useAuth };

export const authComponoentBuilder: AuthComponoentBuilder = {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  ErrorIcon,
  WarningIcon,
};
