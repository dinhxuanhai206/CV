import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Hmovie Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://img1.kienthucvui.vn/uploads/2021/01/09/anh-dai-dien-cho-con-gai-dep-dang-yeu_043116580.jpeg" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
