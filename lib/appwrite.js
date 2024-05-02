import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: "com.jsm.aora",
  projectId: "66315fee0000603113ca",
  databaseId: "6631625600180821918c",
  usersCollectionId: "6631629000048bed96ec",
  videoCollectionId: "6631630d0033ef824f31",
  storageId: "6631662b000f0f0a62e2",
}

// const {
//   endpoint,
//   platform,
//   projectId,
//   databaseId,
//   usersCollectionId,
//   videoCollectionId,
//   storageId,
// } = config;

const client = new Client();

client
  .setEndpoint(config.endpoint)
  .setProject(config.projectId)
  .setPlatform(config.platform)
  
const account = new Account(client);
const avatars = new Avatars(client)
const database = new Databases(client)

export const createUser = async (email, username, password) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    )
    if (!newAccount) throw Error;

    const avatarUrl = avatars.getInitials(username);

    await SignIn(email, password);

    const newUser = await database.createDocument(
      config.databaseId,
      config.usersCollectionId,
      ID.unique(),
      {
        accountid: newAccount.$id,
        email,
        username,
        avatar: avatarUrl
      }
    )
    return newUser
  } catch(error) {
    console.log(error);
    throw new Error(error);
  }
}

export const SignIn = async (email, password) => {
  try {
    const session = await account.createEmailSession(email, password);

    return session;
  } catch (error){
    throw new Error(error);
  }
}

export const getCurrencyUser = async () => {
  try {
    const currencyAccount = await account.get();

    if(!currencyAccount) throw Error;
    
    const currentUser = await database.listDocuments(
      config.databaseId,
      config.usersCollectionId,
      [Query.equal('accountid', currencyAccount.$id)]
    )

    if (!currentUser) throw Error;
    
    return currentUser.documents
  } catch (error) {
    console.log(error);
  }
}

export const getAllposts = async () => {
  try {
    const posts = await database.listDocuments(
      config.databaseId,
      config.videoCollectionId
    )
    return posts.documents;
  } catch (error) {
    throw new Error(error)
  }
}