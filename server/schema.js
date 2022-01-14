import { buildSchema } from "graphql";

export const Schema = buildSchema(`
    type Friend {
        id: ID  
        firstName: String
        lastName: String
        gender: Gender
        email: [Email]
        age: Int
        contacts: [Contact]
    }
    
    type Email {
        email: String
    }
    
    type  Contact {
        firstName: String
        lastName: String
    }
    
    enum Gender {
        FEMALE
        MALE
        OTHER
    }
    
    type Query {
        getFriend(id: ID): Friend
        friends: [Friend]
    }
    
    input FriendInput {
        id: ID  
        firstName: String
        lastName: String
        gender: Gender
        email: [EmailInput]
        age: Int
        contacts: [ContactInput]
    }
    
    input ContactInput {
        firstName: String
        lastName: String
    }
    
    input EmailInput {
        email: String
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend
    } 
`);
