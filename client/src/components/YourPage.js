import React from "react";
import { Header } from "semantic-ui-react";
import Post from "./Post";
import PostForm from "./PostForm";

class YourPage extends React.Component {
  state = {
    posts: [
      { id: 1, title: "Post 1", body: "Body 1" },
      { id: 1, title: "Post 2", body: "Body 2" },
    ],
  };

  editPost = (postData) => {
    const posts = this.state.posts.map((p) => {
      if (postData.id === p.id) {
        return postData;
      }
      return p;
    });
    this.setState({ posts });
  };

  addPost = (postData) => {
    const post = { id: `Math.random()`, ...postData };
    const newPosts = [post, ...this.state.posts];
    this.setState({
      posts: newPosts,
    });
  };
  renderPosts() {
    return this.state.posts.map((post) => {
      return <Post key={post.id} {...post} edit={this.editPost} />;
    });
  }

  render() {
    return (
      <div>
        <Header as="h1">Your Myspace Posts</Header>
        <PostForm add={this.addPost} />
        {this.renderPosts()}
      </div>
    );
  }
}

export default YourPage;