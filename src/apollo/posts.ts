import { gql } from "@apollo/client";

export const ALL_POST = gql`
  query AllPosts {
    posts: allPosts {
      id
      title
      postImage
      body
    }
  }
`;

export const GET_POST = gql`
  query ($id: ID!) {
    post: Post(id: $id) {
      id
      title
      postImage
      body
    }
  }
`;

export const ADD_POST = gql`
  mutation CreatePost($title: String!, $postImage: String!, $body: String!) {
    createPost(title: $title, postImage: $postImage, body: $body) {
      id
      title
      postImage
      body
    }
  }
`;

export const UPDATE_POST = gql`
  mutation UpdatePost(
    $title: String!
    $title: String!
    $postImage: String!
    $body: String!
  ) {
    updatePost(id: $id, completed: $completed) {
      id
      title
      postImage
      body
    }
  }
`;

export const DELETE_POST = gql`
  mutation DeletePost($id: ID!) {
    removePost(id: $id) {
      id
    }
  }
`;
