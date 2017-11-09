import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', loadChildren: './modules/homepage.module#HomePageModule' },
    { path: 'home', loadChildren: './modules/homepage.module#HomePageModule' },
    { path: 'auth', loadChildren: './modules/auth.module#AuthModule' },
     
    // { path: 'sign', loadChildren: './components/sign/sign.module#SignModule' },
    // { path: 'apex', loadChildren: './modules/apex.module#ApexModule' },
    // { path: 'admin', loadChildren: './modules/admin.module#AdminModule' },
    { path: 'student', loadChildren: './modules/student.module#StudentModule' },
    { path: 'trainer', loadChildren: './modules/trainer.module#TrainerModule' },
    { path: 'account', loadChildren: './modules/account.module#AccountModule' },   
    { path: 'batches', loadChildren: './modules/batches.module#BatchesModule' },
    { path: 'branches', loadChildren: './modules/branch.module#BranchesModule' },
    { path: 'courses', loadChildren: './modules/course.module#CourseModule' },   
    { path: 'topics', loadChildren: './modules/topics.module#TopicsModule' },
    { path: 'questionnaire', loadChildren: './modules/questionnaire.module#QuestionnaireModule' },
    { path: 'myprofile', loadChildren: './modules/myprofile.module#MyProfileModule'},
    { path: 'settings', loadChildren: './modules/settings.module#SettingsModule'},
    { path: 'menu', loadChildren: './modules/menu.module#MenuModule'},
    { path:'studenttest', loadChildren: './modules/studenttest.module#StudentTestModule'}
   

]

export const appRoutingProviders: any[] = [];
export const appRoutes: any = RouterModule.forRoot(routes, { useHash: true });
