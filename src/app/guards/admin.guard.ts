import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AdminService } from "../services/admin.service";

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(
        private adminService: AdminService
    ) {}

    canActivate() {
      const password = prompt('Password pwease π₯Ίππ');
      return this.adminService.isUserAdministrator(password);
    }
}