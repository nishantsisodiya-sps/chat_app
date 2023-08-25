import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { user } from 'src/app/interfaces/profileInterface';
import { GroupService } from 'src/app/services/group.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {
  isCollapsed: boolean = false;
  MyGroupForm !: FormGroup
  allmembers : user[] = []
  constructor(private fb : FormBuilder , 
    public dialogRef: MatDialogRef<AddGroupComponent>,
    private token: TokenService,
    private groupService : GroupService,
    private user : UserService
    ) {

    this.MyGroupForm = this.fb.group({
      name: '',
      members: this.fb.array([]),
      description : ''
    });

   }

  ngOnInit(): void {
    this.getUsers()
  }

  get selectedMembers(): FormArray {
    return this.MyGroupForm.get('members') as FormArray;
  }

  toggleMemberSelection(memberName: string) {
    const selectedMembersArray = this.selectedMembers.value as string[];
    const memberIndex = selectedMembersArray.indexOf(memberName);
  
    if (memberIndex !== -1) {
      this.selectedMembers.removeAt(memberIndex);
    } else {
      this.selectedMembers.push(this.fb.control(memberName));
    }
  }
 

  isSelected(memberName: string): boolean {
    return this.selectedMembers.value.includes(memberName);
  }

  

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


   
  createGroup() {
    const userId = this.token.getUserId().id;
    const formData = this.MyGroupForm.value;
  
    this.groupService.CreateGroup(userId, formData).subscribe(res => {
      this.dialogRef.close(res);
      
    });
  }


  getUsers(){
    this.user.getUsers().subscribe(res=>{
      this.allmembers = res
      console.log(this.allmembers);
    })
  }

}
