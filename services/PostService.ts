import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostService {
  async getAllPosts() {
    return prisma.post.findMany({ where: { isDeleted: false }, orderBy : { createdAt : "desc" } });
  }

  async getPostById(id: string) {
    return prisma.post.findUnique({ where: { id } });
  }

  async getPostBySlug(slug: string) {
    return prisma.post.findUnique({
      where: { slug },
    });
  }

  async createPost(slug: string , title: string, content: string) {
    return prisma.post.create({ data: { title, content, slug } });
  }

  async updatePostBySlug(slug: string, title: string, content: string) {
    return prisma.post.update({ where: { slug }, data: { title, content } });
  }

  async softDeletePost(slug: string) {
    return prisma.post.update({ where: { slug }, data: { isDeleted: true, isActive: false } });
  }
}

export default new PostService();
