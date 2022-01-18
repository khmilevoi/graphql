import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

export const typeDefs = `
    type Query {
        getFriend(id: ID): Friend
        getAlien(id: ID): Alien
    }
    
    type Mutation {
        createFriend(input: FriendInput): Friend
        updateFriend(input: FriendInput): Friend
        deleteFriend(id: ID!): Friend
        createAlien(input: AlienInput): Alien
    }

    type Friend {
        id: ID  
        firstName: String
        lastName: String
        gender: Gender
        email: String
        age: Int
        contacts: [Contact]
    }
   
    type Alien {
        id: ID
        firstName: String
        lastName: String
        planet: String
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
    
    
    input FriendInput {
        id: ID  
        firstName: String
        lastName: String
        gender: Gender
        email: String
        age: Int
        contacts: [ContactInput]
    }
    
    input ContactInput {
        firstName: String
        lastName: String
    }
   
     input AlienInput {
        id: ID
        firstName: String
        lastName: String
        planet: String
    }
`;

export const schema = makeExecutableSchema({ typeDefs, resolvers });
