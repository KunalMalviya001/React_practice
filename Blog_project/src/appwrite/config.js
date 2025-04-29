/* eslint-disable no-unreachable */
import conf from '../conf/conf.js';
import { Client, ID, Databases, Storage, Query } from 'appwrite';


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriterUrl).setProject(conf.appwriterProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.createDocumnet(
                conf.appwriterDatabaseId,
                conf.appwriterCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            );
        } catch (error) {
            throw error;
        }
    }
    async updatePost(slug, { title, content, featuredImage, status}) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.updateDocument(
                conf.appwriterDatabaseId,
                conf.appwriterCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            throw error;
        }
    }
    async deletePost(slug) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.deleteDocument(
                conf.appwriterDatabaseId,
                conf.appwriterCollectionId,
                slug
            )
            return true;
        } catch (error) {
            throw error;

            return false;
        }
    }   
    async getPost(slug) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.getDocument(
                conf.appwriterDatabaseId,
                conf.appwriterCollectionId,
                slug
            );
        } catch (error) {
            throw error;
        }
    }
    async getPosts(queries = [Query.equal('status', 'active')]) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.databases.listDocuments(
                conf.appwriterDatabaseId,
                conf.appwriterCollectionId,
                queries,
            );
        } catch (error) {
            throw error;
        }
    }



    // file upload

    async uplodefile(file) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.bucket.createFile(
                conf.appwriterBucketId,
                ID.unique(),
                file
            );
            return true;
        } catch (error) {
            throw error;
            return false
        }
    }
    async deleteFile(fileId) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.bucket.deleteFile(
                conf.appwriterBucketId,
                fileId
            );
       
            return true;
        } catch (error) {
            throw error;
  
            return false;
        }
    }
    async getFliePreview(fileId) {
        // eslint-disable-next-line no-useless-catch
        try {
            return await this.bucket.getFilePreview(
                conf.appwriterBucketId,
                fileId
            );
        } catch (error) {
            throw error;
        }
    }

}


const service = new Service();

export default service;