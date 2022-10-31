import CancelIcon from '@mui/icons-material/Cancel';
import { Button, TextField } from "@mui/material";
import { TransitionsModal } from '../../components/common';

export const messageBoxProviderOption = {
	Modal: TransitionsModal,
	Button: Button,
	PrimaryButton: Button,
	RemoveButton: Button,
	CancelIcon: CancelIcon,
	Comment: TextField,
}