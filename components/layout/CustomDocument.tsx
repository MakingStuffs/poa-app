import Head from "next/head";
const CustomDocument: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </Head>
    </>
  );
};

export default CustomDocument;
