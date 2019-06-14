import React, { Component } from 'react';
import api from '../../services/api';

import { StyledForm } from './style';

class NewPost extends Component {
  state = {
    image: null,
    author: '',
    place: '',
    description: '',
    hashtags: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const data = new FormData();
    data.append('image', this.state.image);
    data.append('author', this.state.author);
    data.append('place', this.state.place);
    data.append('description', this.state.description);
    data.append('hashtags', this.state.hashtags);

    await api.post('/v1/post/store', data);

    this.props.history.push('/');
  };

  handleImageChange = e => {
    this.setState({ image: e.target.files[0] });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <input type="file" onChange={this.handleImageChange} />
        <input
          type="text"
          name="author"
          placeholder="Post's author"
          onChange={this.handleChange}
          value={this.state.author}
        />
        <input
          type="text"
          name="place"
          placeholder="Post's place"
          onChange={this.handleChange}
          value={this.state.place}
        />
        <input
          type="text"
          name="description"
          placeholder="Post's description"
          onChange={this.handleChange}
          value={this.state.description}
        />
        <input
          type="text"
          name="hashtags"
          placeholder="Post's hashtags"
          onChange={this.handleChange}
          value={this.state.hashtags}
        />
        <button type="submit">Send</button>
      </StyledForm>
    );
  }
}

export default NewPost;
