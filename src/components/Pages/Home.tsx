
import { Layout, Menu, theme } from 'antd';
import React, {useState, useEffect} from "react";
import axios from "axios";

const { Header, Content, Footer } = Layout;


const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const NewsList = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        const getArticles = async () => {
            const response = await axios.get('https://newsapi.org/v2/everything?q=technology&apiKey=84404e07173f474d8cadd511ce6bb68e')
            console.log(response)
            setArticles(response.data.articles)
        }
        getArticles()
    }, [])}

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['0']}
          items={new Array(4).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `Berita ${key}`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div>
          
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ReactTest</Footer>
    </Layout>
  );
};

export default Home;