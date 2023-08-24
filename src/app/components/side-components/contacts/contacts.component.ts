import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddContactsComponent } from './add-contacts/add-contacts.component';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/interfaces/profileInterface';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  users : user[] = []
  constructor(
    public dialog: MatDialog,
    private user : UserService
    ) { }

  ngOnInit(): void {
    this.getUsers()
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddContactsComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  getUsers(){
    
    this.user.getUsers().subscribe(res=>{
      this.users = res
    })
      
    
  }


  
}   


