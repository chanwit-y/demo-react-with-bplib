import SearchIcon from "@mui/icons-material/Search";
import ChromeReaderModeIcon from "@mui/icons-material/ChromeReaderMode";
import DescriptionIcon from "@mui/icons-material/Description";
import ViewListIcon from '@mui/icons-material/ViewList';
import CampaignIcon from '@mui/icons-material/Campaign';
import RestoreIcon from '@mui/icons-material/Restore';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SettingIcon from "@mui/icons-material/Settings";
import SquareIcon from "@mui/icons-material/Square";

import { Menu, MenuGroup } from "@banpudev/react-components";
import { ComponentType } from "react";

const primaryIconColor = "#5c4ac7";

const primarySXIcon = { color: primaryIconColor };

const initIcon = (Icon: ComponentType<any>) => (
  <Icon sx={{ ...primarySXIcon }} />
);

export const menus: (Menu | MenuGroup)[] = [
  {
    name: "search",
    text: "Search",
    icon: initIcon(SearchIcon),
    path: "/",
    breadcrumbs: ["Search"],
    breadcrumbLinks: ["/"],
    active: true,
  },
  {
    name: "doa-overview",
    text: "DOA Overview",
    icon: initIcon(ChromeReaderModeIcon),
    path: "/doa-overview",
    breadcrumbs: ["DOA Overvie"],
    breadcrumbLinks: ["/doa-overview"],
    active: true,
  },
  {
    name: "bod-authorities-duties",
    text: "BOD Authorities & Duties",
    icon: initIcon(DescriptionIcon),
    path: "/bod-authorities-duties",
    breadcrumbs: ["BOD Authorities & Duties"],
    breadcrumbLinks: ["/bod-authorities-duties"],
    active: true,
  },
  {
    name: "doa-table",
    text: "DOA Table",
    icon: initIcon(ViewListIcon),
    path: "/doa-table",
    breadcrumbs: ["DOA Table"],
    breadcrumbLinks: ["/doa-table"],
    active: true,
  },
  {
    name: "announcement",
    text: "Announcement",
    icon: initIcon(CampaignIcon),
    path: "/announcement",
    breadcrumbs: ["Announcement"],
    breadcrumbLinks: ["/announcement"],
    active: true,
  },
  {
    name: "history",
    text: "History",
    icon: initIcon(RestoreIcon),
    path: "/history",
    breadcrumbs: ["History"],
    breadcrumbLinks: ["/history"],
    active: true,
  },
  {
    groupName: "Report",
    groupIcon: initIcon(AssignmentIcon),
    menus: [
      {
        name: "doa-report",
        text: "DOA Report",
        icon: (
          <SquareIcon
            fontSize="small"
            sx={{ fontSize: 10, color: "#c7c5f8", rotate: "45deg" }}
          />
        ),
        path: "/doa-report",
        breadcrumbs: ["Report"],
        breadcrumbLinks: ["/doa-report"],
        active: true,
      },
    ],
  },
  {
    groupName: "Settings",
    groupIcon: initIcon(SettingIcon),
    menus: [
      {
        name: "workflow",
        text: "Workflow",
        icon: (
          <SquareIcon
            fontSize="small"
            sx={{ fontSize: 10, color: "#c7c5f8", rotate: "45deg" }}
          />
        ),
        path: "/workflow",
        breadcrumbs: ["Setting"],
        breadcrumbLinks: ["/workflow"],
        active: true,
      },
      {
        name: "user-management",
        text: "User Management",
        icon: (
          <SquareIcon
            fontSize="small"
            sx={{ fontSize: 10, color: "#c7c5f8", rotate: "45deg" }}
          />
        ),
        path: "/user-management",
        breadcrumbs: ["User Management"],
        breadcrumbLinks: ["//user-management"],
        active: true,
      },
    ],
  },
];
