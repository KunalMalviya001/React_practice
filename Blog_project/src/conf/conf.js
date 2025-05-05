// const conf = {
//     appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL || "https://appwrite.io/v1"),
//     appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID  || "680f6f1c002d7adc8acc"),
//     appwriteDatabaseId: String(import.meta.env.VITE_APPWRITER_DATABASE_ID),
//     appwriteCollectionId: String(import.meta.env.VITE_APPWRITER_COLLECTION_ID),
//     appwriteApiKey: String(import.meta.env.VITE_APPWRITER_API_KEY),
// }


// export default conf;


const conf = {
    appwriteUrl: import.meta.env.VITE_APPWRITE_URL,
    appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
    appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
    appwriteCollectionId: import.meta.env.VITE_APPWRITE_COLLECTION_ID,
    appwriteBucketId: import.meta.env.VITE_APPWRITE_BUCKET_ID,
  };
  
  export default conf;
  