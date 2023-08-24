import { Component, OnInit } from '@angular/core';
import { profile } from 'src/app/interfaces/profileInterface';
import { ProfileService } from 'src/app/services/profile.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  profileData: profile[] = [];
  
  constructor(private profile: ProfileService, private token: TokenService) { }

  ngOnInit(): void {
    this.getProfile();
  }


  getProfile() {
    let id = this.token.getUserId().id;
    this.profile.getProfile(id).subscribe((res) => {
      this.profileData.push(res);
      console.log(this.profileData);
    });
    
  }

}
