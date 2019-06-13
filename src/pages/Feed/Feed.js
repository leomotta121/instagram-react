import React, { Component } from 'react';

import { PostSection } from './style';

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

class Feed extends Component {
  render() {
    return (
      <PostSection>
        <article>
          <header>
            <div className="user-info">
              <span>Leonardo Motta</span>
              <span className="place">Brasilia</span>
            </div>

            <img src={more} alt="mais" />
          </header>

          <img className="img-post" src="" alt="" />

          <footer>
            <div className="actions">
              <img src={like} alt="" />
              <img src={comment} alt="" />
              <img src={send} alt="" />
            </div>

            <strong>999 Curtidas</strong>

            <p>
              Um post muito massa
              <span>#react #top</span>
            </p>
          </footer>
        </article>
      </PostSection>
    );
  }
}

export default Feed;
