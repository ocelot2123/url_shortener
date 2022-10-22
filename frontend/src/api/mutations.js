import { gql } from "@urql/core";

const GENERATE_URL = gql`
  mutation generate_url($input: String!) {
    generateUrl(url: $input) {
      url {
        id
        originalLink
      }
    }
  }
`;

export { GENERATE_URL };
