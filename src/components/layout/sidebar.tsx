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
  color: ${CONTENT_COLOR};
  padding: 5px 9px;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: ${BG_COLOR};
  }
`;

const Hash = styled.span`
  color: ${CONTENT_COLOR};
  font-size: 1.1rem;
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
`;

const SidebarGrid = styled.div`
  display: grid;
  grid-gap: 5px;
  padding: 10px;
`;

const Sidebar = () => {
  return (
    <SidebarOutline>
      <SidebarGrid>
        <Entry href="/about">About</Entry>
        <Entry href="/github">Github</Entry>
        <Entry href="/projects">Projects</Entry>
        <Entry href="/test">Test</Entry>
      </SidebarGrid>
    </SidebarOutline>
  );
};

export default Sidebar;
