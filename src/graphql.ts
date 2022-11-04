
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewBoard {
    title: string;
    content: string;
    status: string;
}

export class UpdateBoard {
    id: string;
    title?: Nullable<string>;
    content?: Nullable<string>;
    status?: Nullable<string>;
}

export class Board {
    id: string;
    title: string;
    content: string;
    status: string;
    createdAt: string;
    updatedAt: string;
}

export abstract class IQuery {
    abstract getAllBoard(): Board[] | Promise<Board[]>;

    abstract getBoardById(id: string): Nullable<Board> | Promise<Nullable<Board>>;
}

export abstract class IMutation {
    abstract createBoard(input?: Nullable<NewBoard>): Board | Promise<Board>;

    abstract updateBoard(input?: Nullable<UpdateBoard>): Nullable<Board> | Promise<Nullable<Board>>;

    abstract deleteBoard(id: string): Nullable<Board> | Promise<Nullable<Board>>;
}

type Nullable<T> = T | null;
