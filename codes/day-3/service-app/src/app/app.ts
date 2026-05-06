import { ClassProvider, Component, Inject, inject, InjectionToken, OnInit, signal } from '@angular/core';
import { DataService, IService } from './data.service';
import { provideDataServiceProvider } from './providers/service-providers';
import { SERVICE_TOKEN } from './configs/constants';
import { StringTokenKind } from '@angular/compiler';


@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  // providers: [
  //   prvideDataServiceProvider()
  // ]
})
export class App implements OnInit {
  //people: string[] | undefined;
  people?: string[];
  private ds: IService;

  //when the token (provide) and the service class (useClass) is the same
  // constructor( ds: IService) {
  //   this.ds = ds;
  // }

  //when the token (provide) and the service class (useClass) are different
  // constructor(@Inject(SERVICE_TOKEN) ds: DataService) {
  //   this.ds = ds;
  // }

  //loosely coupled
  constructor(@Inject(SERVICE_TOKEN) ds: IService) {
    this.ds = ds;
  }

  // constructor() {
  //   this.ds = inject(DataService)
  // }
  ngOnInit(): void {
    this.people = this.ds.getData()
  }
}
