import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    const arr = [
      {
        id: 1,
        name: 'Vova',
      },
      {
        id: 2,
        name: 'Sasha',
      },
    ];

    return arr.find((item) => item.id === 1);
  }
}
