<template>
  <div>
    <template v-if="$apollo.loading">
      <Loader/>
    </template>

    <template v-else>
      <h1>{{user.displayName}}</h1>
      <ul>
        <li>login: {{user.username}}</li>
        <li>nazwa: {{user.displayName}}</li>
      </ul>
    </template>
  </div>
</template>
<script>
  import Loader from '@/components/Loader'
  import gql from 'graphql-tag'
  const USER_QUERY = gql`
    query UserQuery($id: ID!) {
      user(id: $id) {
        id
        username
        displayName
      }
    }
  `
  export default {
    components: { Loader },
    data() {
      return {
        user: {},
        id: this.$route.params.id
      }
    },

    apollo: {
      user: {
        query: USER_QUERY,
        variables() {
          return {id: this.id}
        }
      }
    }
  }
</script>
