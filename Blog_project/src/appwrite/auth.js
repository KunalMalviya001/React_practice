import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;
    
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (!userAccount) {
                // Attempt to log in right after creating the account
                
                return await this.login({ email, password });
                // throw new Error("Account created successfully, but login is not implemented.");
            } else {
                throw new Error("Account creation failed.");
            }
        } catch (error) {
            console.error("Appwrite service :: createAccount :: error", error);
            throw new Error("Error creating account: " + error.message);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Appwrite service :: login :: error", error);
    
            // Optional: Provide specific feedback for common errors
            if (error.code === 401) {
                throw new Error("Invalid email or password.");
            }
    
            throw new Error("Login failed: " + (error.message || "Unknown error"));
        }
    }
    

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            throw new Error(error?.message || "Unable to fetch current user.");
        }
    }
    

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout :: error", error);
            throw new Error("Error logging out: " + error.message);
        }
    }
}

const authService = new AuthService();
export default authService;
