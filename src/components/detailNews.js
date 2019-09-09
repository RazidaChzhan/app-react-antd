import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Card, Col, Row} from 'antd';
import CommentNews from "./comment";
export default class DetailNews extends Component {
    
    render() {
        console.log('detailNews', this.props.details);
        const details = this.props.details
        return(
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Row gutter={24}>
                    <Col span={24}>
                        <Card>
                            <h3>{details.title}</h3>
                            <p>{details.description}</p>
                            <img src={details.urlToImage} alt={details.title} height="150"></img>
                            <p>Дата публикации: {details.publishedAt.slice(0, 10)}</p>
                            <a href={details.url}>Источник: {details.url}</a>
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