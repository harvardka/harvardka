import gql from 'graphql-tag'

export const someGraphQLQuery = gql`
    query HeroNameAndFriends($episode: Episode) {
      hero(episode: $episode) {
        name
        friends {
          name
        }
      }
}
`