import gql from 'graphql-tag';

// export const getInvestor = gql`
//   query investorQuery($industry: String!) {
//     Organization(categories: $industry) {
//       company_name
//     }
//   }
// `;

export const getInvestor = gql`
  query investorQuery($rounds: String!, $industry: [String]) {
    Investor(
      investmentTypes: [$rounds],
      categories: $industry,
      limit: 10,
      ranking: "pageRank"
    ) {
      companyName
      fundingTotalUsd
      investmentCount
      logoUrl
      city
      description
    }
  }
`;

// export const getMain = gql`
//   query someGraphQLQuery($company_name: String!) {
//     Organization(company_name: $company_name) {
//       company_name
//       affiliatedTo {
//         first_name
//         last_name
//       }
//       description
//       funding_total_usd
//       founded_on
//       last_funding_on
//       email
//       phone
//       facebook_url
//       linkedin_url
//       logo_url
//     }
//   }
// `;
