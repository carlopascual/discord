import styled from "styled-components";
import Link from "next/link";

import { BG_DARKER_COLOR, CONTENT_COLOR, BG_COLOR } from "constants/colors";

type Entry = {
  children: React.ReactNode;
  href: string;
};

const EntryOutline = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgb(142, 146, 151);
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: rgba(79, 84, 92, 0.16);
    color: #d6d7d8;
  }
`;

const Hash = styled.span`
  color: #72767d;
  font-size: 18px;
  font-weight: 400;
`;

const Entry = ({ children, href }: Entry) => {
  return (
    <Link href={href}>
      <a style={{ textDecoration: "none" }}>
        <EntryOutline>
          <Hash>#</Hash> {children}
        </EntryOutline>
      </a>
    </Link>
  );
};

const SidebarOutline = styled.div`
  background: ${BG_DARKER_COLOR};
  height: 100%;
`;

const SidebarGrid = styled.div`
  display: grid;
  grid-gap: 1px;
  padding: 8px;
`;

const Sidebar = ({ className }: { className: string }) => {
  return (
    <SidebarOutline className={className}>
      <SidebarGrid>
        <Entry href="/">welcome</Entry>
        <Entry href="/about">about</Entry>
        <Entry href="/github">github</Entry>
        <Entry href="/experience">experience</Entry>
        <Entry href="/projects">projects</Entry>
        <Entry href="/social">social</Entry>
      </SidebarGrid>
    </SidebarOutline>
  );
};

export default Sidebar;
