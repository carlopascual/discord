import { BG_COLOR, CONTENT_COLOR } from "constants/colors";
import styled from "styled-components";
import Sidebar from "./sidebar";

type Layout = {
  children: React.ReactNode;
  title: string;
};

type Header = {
  title: string;
  className: string;
};

const Outline = styled.div`
  padding: 50px;
`;

const HEADER_HEIGHT = 50;

const HeaderOutline = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 20px;
  border-bottom: 2px solid rgb(0, 0, 0, 0.7);
  font-size: 1rem;
  color: white;
  font-weight: bold;
  background: ${BG_COLOR};
  height: ${HEADER_HEIGHT}px;
`;

const Hash = styled.span`
  color: ${CONTENT_COLOR};
  font-size: 1.7rem;
  font-weight: 400;
`;

const Header = ({ title, className }: Header) => (
  <HeaderOutline className={className}>
    <Hash>#</Hash> {title}
  </HeaderOutline>
);

const SIDEBAR_WIDTH = 250;

const LayoutOutline = styled.div`
  position: relative;
  right: 0;
  width: calc(100% - ${SIDEBAR_WIDTH}px);

  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: ${SIDEBAR_WIDTH}px;
  }

  .header {
    position: fixed;
    left: ${SIDEBAR_WIDTH}px;
    width: calc(100% - ${SIDEBAR_WIDTH}px);
    z-index: 1;
  }

  .footer {
    position: fixed;
    left: ${SIDEBAR_WIDTH}px;
    bottom: 0;
    width: calc(100% - ${SIDEBAR_WIDTH}px);
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  left: ${SIDEBAR_WIDTH}px;
  top: ${HEADER_HEIGHT}px;
  padding: 50px;
`;

const Layout = ({ children, title }: Layout) => (
  <LayoutOutline>
    <Sidebar className="sidebar" />
    <Header className="header" title={title} />
    <ContentWrapper>{children}</ContentWrapper>
  </LayoutOutline>
);

export default Layout;
