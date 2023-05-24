import './App.css';
import { Layout } from 'antd';
import Header from './layout/Header';
import Main from './layout/Main'
import Footer from './layout/Footer';

function App() {
  return (
    <>
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
    </>
  );
}

export default App;
