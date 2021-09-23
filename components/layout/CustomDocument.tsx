import Head from "next/head";
const CustomDocument: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <meta />
      </Head>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default CustomDocument;
