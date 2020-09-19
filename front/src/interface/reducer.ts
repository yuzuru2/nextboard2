export default interface reducer {
  home: {
    type?: string;
    pagination: number;
    count: number;
    data: {
      id: string;
      name: string;
      genreId: string;
      count: number;
      updatedAt: string;
    }[];
    post: {
      name: string;
      genreId: number;
    };
  };
  talk: {
    type?: string;
    pagination: number;
    count: number;
    data: {
      talkId: string;
      roomId: string;
      name: string;
      message: string;
      count: number;
      createdAt: string;
    }[];
    post: {
      name: string;
      message: string;
    };
  };
}
