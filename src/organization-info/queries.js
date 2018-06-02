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
      affiliatedTo {
        first_name
        last_name
      }
      description
      funding_total_usd
      founded_on
      last_funding_on
      email
      phone
      facebook_url
      linkedin_url
      logo_url
    }
  }
`;
