import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxpalindromeComponent } from './fluxpalindrome.component';
import {DataService} from "../services/data.service";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FluxpalindromeComponent', () => {
  let component: FluxpalindromeComponent;
  let fixture: ComponentFixture<FluxpalindromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FluxpalindromeComponent ],
      providers: [DataService, HttpClientTestingModule, HttpClient, HttpHandler]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxpalindromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
  });
  
});
