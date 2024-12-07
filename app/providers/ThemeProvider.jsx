import React from "react";
import { ConfigProvider } from "antd";
import { Barlow } from "next/font/google";

export default function ThemeProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorError: "#d48181",
          fontSize: 16,
          fontFamily: "var(--font-barlow)",
        },
        components: {
          Menu: {
            itemSelectedBg: "var(--primaryAccent)",
            itemSelectedColor: "white",
          },
          Modal: {
            contentBg: "var(--lightbackground)",
          },
          Select: {
            activeBorderColor: "var(--primaryLight)",
            activeOutlineColor: "var(--primaryLight)",
            activeShadow: "0 1px 1px 1px var(--primaryLight)",
            optionSelectedBg: "var(--primaryLight)",
            optionSelectedColor: "white",
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
