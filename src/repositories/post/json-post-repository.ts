import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_FILE_PATH, "utf-8");
    const { posts }: { posts: PostModel[] } = JSON.parse(jsonContent);
    return posts;
  }

  async findAll(): Promise<PostModel[]> {
    return this.readFromDisk();
  }

  async findById(id: string) {
    const posts = await this.findAll();

    const post = posts.find((post) => post.id === id);

    if (!post) throw new Error("Post não encontrado");

    return post;
  }

  async findBySlug(slug: string) {
    const posts = await this.findAll();

    const post = posts.find((post) => post.slug === slug);

    if (!post) throw new Error("Post não encontrado");

    return post;
  }
}
