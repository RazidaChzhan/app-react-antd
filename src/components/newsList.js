import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {Helmet} from "react-helmet";
import { Card, Col, Row } from 'antd';


export default class NewsList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        articles: []
      };
      this.loadNews();
    }

    loadNews(){
        fetch('https://newsapi.org/v2/top-headlines?country=ru&category=science&apiKey=79f02d15a646407580b5aa67852e71c9')
        .then(response => response.json())
        .then(data => {
            this.setState({articles: data.articles});
        })
        .catch(err => {
            console.log(err);
        });
    }

    render() {

        // const gridStyle = {
        // width: '100%',
        // textAlign: 'left',
        // };

        const { articles } = this.state;
        console.log('articles', articles);
        return (
        <div>
            <Helmet>
                <title>All News</title>
            </Helmet> 
            {articles.map(article => (
                <div style={{ background: '#ECECEC', padding: '30px' }}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Card 
                            title={article.title} 
                            bordered={false}>
                            <p>Дата публикации: {article.publishedAt.slice(0, 10)}</p> 
                            <NavLink to={{
                                pathname:'/detail',
                                articleProps:{
                                    title: article.title,
                                    description: article.description,
                                    url: article.url,
                                    urlToImage: article.urlToImage,
                                    publishedAt: article.publishedAt,

                                }
                            }} >Подробнee</NavLink>                 
                            </Card>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
      );
    }
} 


