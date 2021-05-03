import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  title: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private titleService: Title) { }

  setTitle(title: string) {
    this.title.next(title);
    this.titleService.setTitle(title);
  }
}
