import { CONTENT_COLOR } from "constants/colors";
import styled from "styled-components";
import Sidebar from "./sidebar";

type Layout = {
  children: React.ReactNode;
  title: string;
};

type Header = {
  title: string;
};

const Outline = styled.div`
  padding: 50px;
`;

const HeaderOutline = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 20px;
  border-bottom: 2px solid rgb(0, 0, 0, 0.7);
  font-size: 1.3rem;
  color: white;
  font-weight: bold;
`;

const Hash = styled.span`
  color: ${CONTENT_COLOR};
  font-size: 1.7rem;
  font-weight: 400;
`;

const Header = ({ title }: Header) => (
  <HeaderOutline>
    <Hash>#</Hash> {title}
  </HeaderOutline>
);

const Layoutoutline = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  height: 100vh;
`;

const Layout = ({ children, title }: Layout) => (
  <Layoutoutline>
    <Sidebar />
    <div>
      <Header title={title} />
      <Outline>{children}</Outline>
    </div>
  </Layoutoutline>
);

export default Layout;
