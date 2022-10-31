import { Box,Typography } from "@mui/material";
import {  useMemo } from "react";
import { Env, useAuth } from "../../lib/config";
import { ArrowPopover, ProfileAvatar, ProfileInfo } from "../common";

export const ToolbarEnd = () => {
  const { userProfile, logout } = useAuth();

  const avatar = useMemo(
    () => (
      <ProfileAvatar
        src={
          userProfile?.personId
            ? `${Env.IMAGE_ROOT}/profile-pictures/${userProfile?.personId}.jpeg`
            : ""
        }
      />
    ),
    [userProfile]
  );

  const name = useMemo(
    () => (
      <Typography
        fontSize={14}
        fontWeight={450}
        letterSpacing={.5}
      >{`${userProfile?.firstNameEn} ${userProfile?.lastNameEN} (${userProfile?.jobLevelModel.name})`}</Typography>
    ),
    [userProfile]
  );

  return (
    <Box display="flex" alignItems="center" gap={1}>
      {avatar}
      {name}
      <ArrowPopover>
        <ProfileInfo
          logout={logout}
          profileAvatar={avatar}
          companyName="Banpu Public Company Limited"
          firstNameEN={userProfile?.firstNameEn ?? ""}
          lastNameEN={userProfile?.lastNameEN ?? ""}
          jobTitle={userProfile?.jobLevelModel.name ?? ""}
        />
      </ArrowPopover>
    </Box>
  );
};
