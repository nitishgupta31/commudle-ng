import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabsRoutingModule} from './labs-routing.module';
import {LabsComponent} from './components/labs/labs.component';
import {CreateLabComponent} from './components/create-lab/create-lab.component';
import {EditLabComponent} from './components/edit-lab/edit-lab.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDialogModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSidebarModule,
  NbSpinnerModule,
  NbTooltipModule,
  NbUserModule
} from '@nebular/theme';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {SharedComponentsModule} from 'projects/shared-components/shared-components.module';
import {MyLabsComponent} from './components/my-labs/my-labs.component';
import {LabComponent} from './components/lab/lab.component';
import {LabStepComponent} from './components/lab/lab-step/lab-step.component';
import {LabListItemComponent} from './components/my-labs/lab-list-item/lab-list-item.component';
import {ReusableComponentsModule} from '../reusable-components/reusable-components.module';
import {LabDiscussionComponent} from './components/lab/lab-discussion/lab-discussion.component';
import {LabDiscussionMessageComponent} from './components/lab/lab-discussion/lab-discussion-message/lab-discussion-message.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {SearchBarComponent} from './components/labs/search-bar/search-bar.component';
import {LabDisplayCardComponent} from './components/lab-display-card/lab-display-card.component';
import {HeaderBannerComponent} from './components/labs/header-banner/header-banner.component';
import {HeaderTextComponent} from './components/labs/header-text/header-text.component';
import {ClickOutsideDirective} from 'projects/commudle-admin/src/app/feature-modules/labs/components/labs/search-bar/click-outside.directive';
import {LabDetailsComponent} from './components/lab/lab-details/lab-details.component';
import {SharedPipesModule} from 'projects/shared-pipes/pipes.module';
import {UsersModule} from 'projects/commudle-admin/src/app/feature-modules/users/users.module';


@NgModule({
  declarations: [
    LabsComponent,
    CreateLabComponent,
    EditLabComponent,
    MyLabsComponent,
    LabComponent,
    LabStepComponent,
    LabListItemComponent,
    LabDiscussionComponent,
    LabDiscussionMessageComponent,
    SearchBarComponent,
    LabDisplayCardComponent,
    HeaderBannerComponent,
    HeaderTextComponent,
    LabDetailsComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    LabsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    EditorModule,
    FontAwesomeModule,
    SharedComponentsModule,
    ReusableComponentsModule,
    YouTubePlayerModule,
    SharedPipesModule,
    NbSpinnerModule,

    // Nebular
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbIconModule,
    NbListModule,
    NbFormFieldModule,
    NbTooltipModule,
    NbDialogModule.forChild(),
    NbUserModule,
    NbSidebarModule.forRoot(),
    NbContextMenuModule,
    UsersModule
  ],
  exports: [
    LabDisplayCardComponent,
    ClickOutsideDirective
  ]
})
export class LabsModule {
}
