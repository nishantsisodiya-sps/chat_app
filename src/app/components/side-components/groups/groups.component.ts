import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddGroupComponent } from './add-group/add-group.component';
import { GroupService } from 'src/app/services/group.service';
import { TokenService } from 'src/app/services/token.service';
import { group } from 'src/app/interfaces/groupsInterface';
import { GetFirstLetterPipe } from 'src/app/utils/get-first-letter.pipe';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  groups : group[] = []

  constructor(
    public dialog: MatDialog,
    private group : GroupService,
    private token : TokenService,
    private _snackBar: MatSnackBar,
 
    ) { }

  ngOnInit(): void {
    this.getGroups()
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AddGroupComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.getGroups();
        this._snackBar.open(result.msg, 'Close', {
          panelClass: 'my-custom-snackbar',
          duration: 3000,
        });
      }
    });
  }


  getGroups(){
    let id = this.token.getUserId().id
    this.group.GetAllGroups(id).subscribe(res=>{
      this.groups = res
    })
  }

 


}
