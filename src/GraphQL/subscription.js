import {gql} from '@apollo/client'


export const GET_JOBS= gql`
subscription MySubscription {
    Jobs (order_by: {created_at: desc}) {
      age
      created_at
      id
      job
      name
    }
  }`;