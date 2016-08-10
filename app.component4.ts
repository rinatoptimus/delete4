import { Component, OnInit} from "@angular/core";
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-app',
    template: `
        {{ title }}
        <ul>
            <li *ngFor="let hero of heroes" (click)="onSelect(hero)">
                {{hero.name}}
            </li>
            <my-hero-detail [hero]="selectedHero"></my-hero-detail>
        </ul>
    `,
    directives: [HeroDetailComponent],
    providers: [HeroService]


    
})

export class AppComponent implements OnInit {

}