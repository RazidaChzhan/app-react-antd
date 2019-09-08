import React, { Component } from 'react';
import { Input, Button } from 'antd';


export default class PageForm extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      url: '',
      urlToImage: '',
      publishedAt: ''
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleUrlToImageChange = this.handleUrlToImageChange.bind(this);
    this.handlePublishedAtChange = this.handlePublishedAtChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  console.log('form submitted title value is', this.state.title);
  console.log('form submitted description value is', this.state.description);
  console.log('form submitted url value is', this.state.url);
  console.log('form submitted urlToImage value is', this.state.urlToImage);
  console.log('form submitted publishedAt value is', this.state.publishedAt);  
  }
  
  handleTitleChange(event) {
    console.log('handleTitleChange', this);
    this.setState({title: event.target.value});
  }
  
  handleDescriptionChange(event) {
    console.log('handleDescriptionChange', this);
    this.setState({description: event.target.value});
  }

  handleUrlChange(event) {
    console.log('handleUrlChange', this);
    this.setState({url: event.target.value});
  }

  handleUrlToImageChange(event) {
    console.log('handleUrlToImageChange', this);
    this.setState({urlToImage: event.target.value});
  }

  handlePublishedAtChange(event) {
    console.log('handlePublishedAtChange', this);
    this.setState({publishedAt: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Введите название новости: </label>
        <Input 
          type="text"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <br></br>      
        <label>Краткое содержание: </label>
        <Input 
          type="text"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
        />
        <br></br>

        <label>Источник новости: </label>
        <Input 
          type="text"
          placeholder="Url"
          value={this.state.url}
          onChange={this.handleUrlChange}
        />
        <br></br>

        <label>Фото новости: </label>
        <Input 
          type="text"
          placeholder="UrlToImage"
          value={this.state.urlToImage}
          onChange={this.handleUrlToImageChange}
        />
        <br></br>

        <label>Дата публикации: </label>
        <Input 
          type="date"
          placeholder="publishedAt"
          value={this.state.publishedAt}
          onChange={this.handlePublishedAtChange}
        />
        
        <br>
        </br>
        <Button type="primary">Сохранить</Button>
       
      </form>
    );
  }
}