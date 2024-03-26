import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";

export type TabProps = {
  icon?: React.ReactNode;
  value: string;
  displayName: string;
  children: React.ReactNode;
};

export type TabsProps = {
  defaultValue?: string;
  tabs: TabProps[];
} & Tabs.TabsProps;
