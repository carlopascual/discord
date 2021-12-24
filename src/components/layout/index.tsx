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

const HEADER_HEIGHT = 48;

const HeaderOutline = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 16px;
  font-size: 16px;
  color: white;
  font-weight: bold;
  background: ${BG_COLOR};
  height: ${HEADER_HEIGHT}px;
  box-shadow: rgba(4, 4, 5, 0.2) 0px 1px 0px 0px,
    rgba(6, 6, 7, 0.05) 0px 1.5px 0px 0px, rgba(4, 4, 5, 0.05) 0px 2px 0px 0px;
`;

const Hash = styled.span`
  color: #6f737a;
  font-size: 21px;
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
  padding: 32px 16px;
`;

const Layout = ({ children, title }: Layout) => (
  <LayoutOutline>
    <Sidebar className='sidebar' />
    <Header className='header' title={title} />
    <ContentWrapper>{children}</ContentWrapper>
  </LayoutOutline>
);

export default Layout;
