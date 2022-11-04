import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BoardsService } from './boards.service';
import { Board, NewBoard, UpdateBoard } from 'src/graphql';

@Resolver('Board')
export class BoardsResolver {
  constructor(private readonly BoardService: BoardsService) {}

  @Query('getAllBoard')
  async getAllBoard() {
    return this.BoardService.getAllBoard();
  }

  @Query('getBoardById')
  async getBoardById(@Args('id') args: string) {
    return this.BoardService.getBoardById(args);
  }

  @Mutation('createBoard')
  async createBoard(@Args('input') args: NewBoard) {
    return this.BoardService.createBoard(args);
  }

  @Mutation('updateBoard')
  async update(@Args('input') args: UpdateBoard) {
    return this.BoardService.updateBoard(args);
  }

  @Mutation('deleteBoard')
  async delete(@Args('id') args: string) {
    return this.BoardService.deleteBoard(args);
  }
}