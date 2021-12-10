import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  
  memberBeingEdited: object = null;

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

//   addToCrew (recruit: object) {
//     if(!this.crew.includes(recruit)) {
//       this.crew.push(recruit);
//     }
//   } 

  add(memberName: string, isFirst: boolean) {
    // if(!this.crew.includes(memberName)) {
    //   this.crew.push({name: memberName, firstMission: isFirst});
    let inCrew = false;
    for(let i = 0;i < this.crew.length;i++) {
      // console.log(this.crew[i]['name']);
      if(this.crew[i]['name'] === memberName){
        inCrew = true;
      }
    }
    if(!inCrew){
      this.crew.push({name: memberName, firstMission: isFirst});
    } 
  }
    
  remove(member: object) {
    let index = this.crew.indexOf(member);
    this.crew.splice(index, 1);
  }

  edit(member: object) {
    this.memberBeingEdited = member;
 }

 save(name: string, member: object) {
  member['name'] = name;
  this.memberBeingEdited = null;
  }
}
