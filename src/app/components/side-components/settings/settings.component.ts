import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { profile } from 'src/app/interfaces/profileInterface';
import { ProfileService } from 'src/app/services/profile.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileData: profile[] = [];
  public id = this.token.getUserId().id
  item : any
  editableFields: { [key: string]: boolean } = {
    email: false,
    name: false,
    username: false
  };

  constructor(
              private profile: ProfileService, 
              private token: TokenService,
              private user : UserService,
              private _snackBar: MatSnackBar,
              ) { }

  ngOnInit(): void {
    this.getProfile();
  }


  getProfile() {
    this.profile.getProfile(this.id).subscribe((res) => {
      this.profileData=[]
      this.profileData.push(res);
    });
  }


  toggleEdit(field: string) {
    this.editableFields[field] = !this.editableFields[field];
  }

  saveInfo(field: string , item : any) {
    this.editableFields[field] = false;
    let name = item.name
    
    this.profile.updateUser(this.id , name).subscribe(res=>{
      console.log(res);
    })
    

  }

  uploadPhoto(event: any): void {
    const id = this.token.getUserId().id;
    const file = event.target.files[0];
    console.log(file);

    if (file) {
      const formData = new FormData();
      formData.append('profilePicture', file);

      this.user.updateProfile(id, formData).subscribe(
        res=> {
          console.log(res);
          if (res) {
           
            this.getProfile()
            this._snackBar.open(res.message, 'Close', {
              panelClass: 'my-custom-snackbar',
              duration: 3000,
            });
          }
        },
        (error: any) => {
          console.error('Error uploading profile picture:', error);
          this._snackBar.open(error.error.message, 'Close', {
            panelClass: 'my-custom-snackbar',
            duration: 3000,
          });
        }
      );
    }
  }
}
