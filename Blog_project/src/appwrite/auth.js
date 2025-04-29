import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriterUrl).setProject(conf.appwriterProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name }) {

        // eslint-disable-next-line no-useless-catch
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({email, password});
            }else {
                return  userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}) {
        // eslint-disable-next-line no-useless-catch
        try {
            const session = await this.account.createEmailSession(email, password);
            return session;
        } catch (error) {
            throw error;
        }
    }

    async getcurrentUser() {
        // eslint-disable-next-line no-useless-catch
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            throw error;
        }
        // eslint-disable-next-line no-unreachable
        return null
    }

    async logout() {
        // eslint-disable-next-line no-useless-catch
        try {
            const session = await this.account.deleteSessions();
            return session;
        } catch (error) {
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;
