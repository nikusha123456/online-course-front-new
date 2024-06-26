import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AboutComponent } from './pages/about/about.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard, ProfileGuard } from './auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { AddCourseComponent } from './pages/add-course/add-course.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { MycoursesComponent } from './pages/mycourses/mycourses.component';
import { EditCourseComponent } from './pages/edit-course/edit-course.component';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'courses',
    component: CoursesComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    canActivate: [AuthGuard],
  },
  { path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard] },
  {
    path: 'mycourses',
    component: MycoursesComponent,
    canActivate: [ProfileGuard],
  },
  {
    path: 'course-add',
    component: AddCourseComponent,
    canActivate: [ProfileGuard],
  },
  { path: 'course-edit/:id', component: EditCourseComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: 'course/:id', component: CoursesPageComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
