import { Inject, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { UserService } from '../features/services/user-service.service';
import { Router } from 'express';

export const authGuard: CanActivateFn = (route, state) => {

  const auth = Inject(UserService) as UserService
  const router = inject(Router)

  if(auth.isAuthenticated())
    {
      return true;
    }
  else
    {
      window.location.assign('/user/login')
      return false;
    }
};
