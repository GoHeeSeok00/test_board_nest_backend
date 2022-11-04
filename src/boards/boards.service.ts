import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Board } from '@prisma/client';
import { NewBoard, UpdateBoard } from 'src/graphql';

@Injectable()
export class BoardsService {
  constructor(private prisma: PrismaService) {}

  // 아이디로 게시글 가져오기
  async getBoardById(id: string): Promise<Board | null> {
    return this.prisma.board.findUnique({
      where: {
        id: parseInt(id),
      },
    });
  }

  // 모든 게시글 가져오기
  async getAllBoard(): Promise<Board[]> {
    return this.prisma.board.findMany({});
  }

  // 게시글 생성
  async createBoard(input: NewBoard): Promise<Board> {
    console.log(input);
    return this.prisma.board.create({
      data: input,
    });
  }

  // 게시글 수정
  async updateBoard(params: UpdateBoard): Promise<Board> {
    const { id, title, content, status } = params;
    return this.prisma.board.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(status && { status }),
      },
    });
  }

  // 게시글 삭제
  async deleteBoard(id: string): Promise<Board> {
    return this.prisma.board.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
