import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreatePostDto } from './create-post.dto';
import { Post as PostEntity } from './post.entity';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postSV: PostService) {}

  @Get()
  getAllPosts(): Promise<PostEntity[]> {
    return this.postSV.getAllPosts();
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postSV.createPost(createPostDto);
  }
}
