import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";

// Add all components that you create here
const components = [];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        IonicModule,
        FormsModule
    ],
    exports: [FormsModule]
})

/* ONCE COMPONENTS ARE CREATED */
// @NgModule({
//     declarations: [...components],
//     imports: [
//         CommonModule,
//         RouterModule,
//         IonicModule,
//         FormsModule
//     ],
//     exports: [FormsModule, ...components]
// })
export class SharedModule {}