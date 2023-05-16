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
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      title
      postImage
      body
    }
  }
`;

export const ADD_POST = gql`
  mutation AddPost(
    $title: String!
    $title: String!
    $postImage: String!
    $body: String!
  ) {
    newPost: createPost(
      id: $id
      title: $title
      postImage: $postImage
      body: $body
    ) {
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
