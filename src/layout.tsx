import { CONTENT_COLOR } from "constants/colors";
import styled from "styled-components";

type Layout = {
  children: React.ReactNode;
};

type Header = {
  channel: string;
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

const Header = ({ channel }: Header) => (
  <HeaderOutline>
    <Hash>#</Hash> {channel}
  </HeaderOutline>
);
const Layout = ({ children }: Layout) => (
  <>
    <Header channel={"carlo_pascual"} />

    <Outline>{children}</Outline>
  </>
);

export default Layout;
