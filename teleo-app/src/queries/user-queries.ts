import { gql } from "@apollo/client";

export const USER_MEDIA_QUERY = gql`
  {
    userMedia {
      id
      url
    }
  }
`;
