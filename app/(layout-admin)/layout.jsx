import "../globals.css";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import LayoutAdmin from "@/app/components/Admin/LayoutAdmin";
import ThemeProvider from "../providers/ThemeProvider";

export const metadata = {
  title: "FURNI ADMIN",
  desc: "OUR FURNI,MAKE UR BUSSINES FURTHER",
};

export default function LayoutSlideBar({ children }) {
  return (
    <>
      <AntdRegistry>
        <div className="flex h-screen">
          <div className="flex-1 flex flex-col bg-lightBackground">
            <ThemeProvider>
              <LayoutAdmin>{children}</LayoutAdmin>
            </ThemeProvider>
          </div>
        </div>
      </AntdRegistry>
    </>
  );
}
