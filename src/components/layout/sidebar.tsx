import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

import { BG_DARKER_COLOR } from "constants/colors";

type Entry = {
  children: React.ReactNode;
  href: string;
  selected: boolean;
};

interface EntryOutline {
  selected: boolean;
}

const EntryOutline = styled.div<EntryOutline>`
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

  ${({ selected }) =>
    selected
      ? `
        background: rgba(79, 84, 92, 0.32);
        color: #dedee0;
      `
      : `
      &:hover {
        background: rgba(79, 84, 92, 0.16);
        color: #d6d7d8;
      }
  `}
`;

const Hash = styled.span`
  color: #72767d;
  font-size: 18px;
  font-weight: 400;
`;

const Entry = ({ children, href, selected }: Entry) => {
  return (
    <Link href={href}>
      <a style={{ textDecoration: "none" }}>
        <EntryOutline selected={selected}>
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
  grid-gap: 2px;
  padding: 8px;
`;

const routes = [
  {
    href: "/",
    title: "welcome",
  },
  {
    href: "/about",
    title: "about",
  },
  {
    href: "/github",
    title: "github",
  },
  {
    href: "/experience",
    title: "experience",
  },
  {
    href: "/projects",
    title: "projects",
  },
  {
    href: "/social",
    title: "social",
  },
];

const Title = styled.h4`
  color: rgb(142, 146, 151);
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin: 0;
`;

const SidebarHeader = styled.div`
  height: 48px;
  display: flex;
  padding-left: 20px;
  align-items: center;
  color: white;
  font-weight: bold;
  box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px 0px,
    rgba(6, 6, 7, 0.05) 0px 1.5px 0px 0px, rgba(4, 4, 5, 0.05) 0px 2px 0px 0px;
`;

const Sidebar = ({ className }: { className: string }) => {
  const router = useRouter();

  return (
    <SidebarOutline className={className}>
      <SidebarHeader>Carlo Pascual</SidebarHeader>
      <div></div>
      <Title style={{ margin: "18px 0 0 18px" }}>Text Channels</Title>
      <SidebarGrid>
        {routes.map(({ href, title }) => (
          <Entry key={href} selected={href === router.asPath} href={href}>
            {title}
          </Entry>
        ))}
      </SidebarGrid>
    </SidebarOutline>
  );
};

export default Sidebar;
