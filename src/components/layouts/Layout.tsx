import Header from '@/components/layouts/Header';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
    </>
  );
};

export default Layout;
