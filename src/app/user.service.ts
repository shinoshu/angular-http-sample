import { Injectable } from '@angular/core';

import { ApiClientService } from './api-client.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  resourceName = 'user';

  constructor(private apiClientService: ApiClientService) {}

  addUser(user: any) {
    return this.apiClientService.create(this.resourceName, user).toPromise();
  }

  getUser(id: string) {
    return this.apiClientService.get(this.resourceName, id).toPromise();
  }

  getUserAll() {
    return this.apiClientService.list(this.resourceName).toPromise();
  }

  updateUser(user: any) {
    return this.apiClientService.update(this.resourceName, user.id, user).toPromise();
  }

  deleteUser(id: string) {
    return this.apiClientService.delete(this.resourceName, id).toPromise();
  }
}
