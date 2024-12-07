"use client";

import React, { useState } from "react";
import { Divider, Menu, Switch } from "antd";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function sidebar() {
  const router = useRouter();
  const items = [
    {
      key: "/dashboard-admin",
      label: "Dashboard",
      icon: <Icon icon={"tdesign:dashboard-1"} className="size-5" />,
      onClick: () => {
        router.push("/dashboard-admin");
      },
    },
    {
      key: "/product",
      label: "Product",
      icon: <Icon icon={"dashicons:products"} className="size-5" />,
      onClick: () => {
        router.push("/product");
      },
    },
    {
      key: "/promo",
      label: "Promo",
      icon: <Icon icon={"lsicon:badge-promotion-filled"} className="size-5" />,
      children: [
        {
          key: "/discount",
          label: "Discount",
          icon: <Icon icon={"ic:twotone-discount"} className="size-5" />,
          onClick: () => {
            router.push("/promo/discount");
          },
        },
        {
          key: "/cashback",
          label: "Cashback",
          icon: (
            <Icon
              icon={"streamline:subscription-cashflow-solid"}
              className="size-5"
            />
          ),
          onClick: () => {
            router.push("/promo/cashback");
          },
        },
      ],
    },
    {
      key: "/Settings",
      label: "Settings",
      icon: <Icon icon={"lets-icons:setting-alt-fill"} className="size-5" />,
      children: [
        {
          key: "/user",
          label: "User",
          icon: <Icon icon={"ri:user-5-fill"} className="size-5" />,
          onClick: () => {
            router.push("/Settings/user");
          },
        },
        {
          key: "/complaint",
          label: "Complaint",
          icon: (
            <Icon icon={"fluent:person-support-20-filled"} className="size-5" />
          ),
          onClick: () => {
            router.push("/Settings/complaint");
          },
        },
        {
          key: "/size",
          label: "Size",
          icon: <Icon icon={"mdi:size-m"} className="size-5" />,
          onClick: () => {
            router.push("/Settings/size");
          },
        },
        {
          key: "/material",
          label: "Material",
          icon: <Icon icon={"mdi-material"} className="size-5" />,
          onClick: () => {
            router.push("/Settings/material");
          },
        },
      ],
    },
  ];

  const [mode, setMode] = useState("inline");
  const [theme, setTheme] = useState("light");

  return (
    <>
      <Menu
        // defaultSelectedKeys={["1"]}
        // defaultOpenKeys={["sub1"]}
        mode={mode}
        theme={theme}
        items={items}
        className="!bg-transparent"
      />
    </>
  );
}
