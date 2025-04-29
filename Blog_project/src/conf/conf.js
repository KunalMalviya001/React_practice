const conf = {
    appwriterUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriterProjectId: String(import.meta.env.VITE_APPWRITER_PROJECT_ID),
    appwriterDatabaseId: String(import.meta.env.VITE_APPWRITER_DATABASE_ID),
    appwriterCollectionId: String(import.meta.env.VITE_APPWRITER_COLLECTION_ID),
    appwriterApiKey: String(import.meta.env.VITE_APPWRITER_API_KEY),
}


export default conf;