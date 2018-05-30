import gql from 'graphql-tag';

export const someGraphQLQuery = gql`
  query someGraphQLQuery($company_name: String!) {
    Organization(company_name: $company_name) {
      acquired {
        company_name
      }
    }
  }
`;

export const getMain = gql`
  query someGraphQLQuery($company_name: String!) {
    Organization(company_name: $company_name) {
      company_name
    }
  }
`;
