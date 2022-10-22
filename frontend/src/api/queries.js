import { gql } from "@urql/core";

const GET_URL = gql`
  query get_url($input: ID!) {
    url(id: $input) {
      originalLink
    }
  }
`;

export { GET_URL };
