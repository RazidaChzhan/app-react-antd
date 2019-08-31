import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, Col, Row} from 'antd';
import CommentNews from "./comment";
export default class DetailNews extends Component {
    
    render() {
        console.log('detail', this.props.location.articleProps);
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card>
                            <h3>{this.props.location.articleProps.title}</h3>
                            <p>{this.props.location.articleProps.description}</p>
                            <img src={this.props.location.articleProps.urlToImage} alt={this.props.location.articleProps.title} height="150"></img>
                            <p>Дата публикации: {this.props.location.articleProps.publishedAt.slice(0, 10)}</p>
                            <a href={this.props.location.articleProps.url}>Источник: {this.props.location.articleProps.url}</a>
                            <p><NavLink to={{pathname:'/'}}>Назад</NavLink></p>
                        </Card>
                    </Col>
                </Row>

                <Row gutter={24}>
                    <Col span={24}>
                        <Card>
                            <CommentNews/>
                        </Card>
                    </Col>
                </Row>

        </div>
        )
    }
    
}