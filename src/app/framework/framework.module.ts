import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ImpressumComponent } from "./impressum/impressum.component";
import { StartComponent } from "./start/start.component";
import { MarkdownModule } from "ngx-markdown";
import { ContentComponent } from "./content/content.component";
import { BlogsService } from "./shared/blogs.service";
import { ShellComponent } from "./shell/shell.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MarkdownModule.forChild(),
    RouterModule.forChild([]),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  declarations: [
    StartComponent,
    ImpressumComponent,
    ContentComponent,
    ShellComponent
  ],
  exports: [
    ShellComponent,
    StartComponent,
    ImpressumComponent,
    ContentComponent
  ],
  providers: [BlogsService]
})
export class FrameworkModule {}
