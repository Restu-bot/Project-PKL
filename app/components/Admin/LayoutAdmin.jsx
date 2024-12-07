"use client";

import pkg from "@/package.json";
import React from "react";
import { Layout } from "antd";
import logo from "@/public/assets/logo-furni-1.png";
import SideBar from "./sidebar";

const { Sider, Header, Footer, Content } = Layout;

const layoutStyle = {
  overflow: "hidden",
  width: "calc(100%)",
  maxWidth: "calc(100%)",
};

export default function LayoutAdmin({ children }) {
  return (
    <>
      <Layout style={layoutStyle} className="bg-background">
        <Sider width="15%" className="!bg-primaryLight text-center relative">
          <div className=" w-full justify-center flex border-b-2">
            <img src={logo.src} className="h-16" />
          </div>
          <div className="py-2 px-2 border-r-0 overflow-y-auto">
            <SideBar />
          </div>
          <div className="absolute bottom-0 h-16 border-t-2 inset-x-0 flex items-center justify-center text-white">
            <p>{pkg?.version}</p>
          </div>
        </Sider>
        <Layout>
          <Header className="!bg-primaryLight text-3xl">Header</Header>
          <Content className="min-h-85v overflow-y-auto p-6 !bg-background">
            {children}
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
