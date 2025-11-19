import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";
import { readFile } from "fs/promises";

const ROOT_DIR = process.cwd();
const JSON_FILE_PATH = resolve(ROOT_DIR, "src", "db", "seed", "posts.json");

const SIMULATED_DELAY_MS = 0;

export class JsonPostRepository implements PostRepository {
  private async readFromDisk() {
    const jsonContent = await readFile(JSON_FILE_PATH, "utf-8");
    const { posts }: { posts: PostModel[] } = JSON.parse(jsonContent);
    return posts;
  }

  private async simulateDelay() {
    if (SIMULATED_DELAY_MS <= 0) return;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, SIMULATED_DELAY_MS);
    });
  }

  async findAll(): Promise<PostModel[]> {
    await this.simulateDelay();
    return this.readFromDisk();
  }

  async findById(id: string) {
    await this.simulateDelay();
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
