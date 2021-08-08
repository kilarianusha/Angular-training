import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backendService';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private backendService: BackendService) { }

  capturedData: any = {}

  newUser = {
    fullName: 'Kishan',
    email: 'kishan.user@gmail.com',
    password: 'examplepwdtwo',
    ipAddress: '127.0.0.1',
    os: 'darwin64',
    network: 'private',
    browser: 'Google Chrome'
  }

  servers = [
    {
      name: 'Test Server - 1',
      capacity: 10,
      id: this.generateId(),
    },
    {
      name: 'Test Server - 2',
      capacity: 50,
      id: this.generateId(),
    }
  ]

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    })
  }

  onSave() {  
    this.backendService.storeUsers(this.newUser)
      .subscribe(
        // Return the data
        (response) => console.log(response),
        // Return the error
        (error) => console.log(error),
        // Unsubsrcibe that observable
        // () => ObjectUnsubscribedError()
      )
  }

  getGithubUsers() {
    this.backendService.getUsers()
      .subscribe(
        // Get the data from GitHub
        (response) => {
          this.capturedData = response
          console.log(this.capturedData);
        },
        (error) => console.log(error)
      )
  }

  generateId() {
    return Math.round(Math.random() * 1000)
  }

  ngOnInit(): void {
  }

}
