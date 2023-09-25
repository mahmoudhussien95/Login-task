import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { __values } from 'tslib';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public submittedschool = false;
  formValue !:FormGroup;
  eventTest !: FormGroup;
  public get formRecordControls() {
    return this.eventTest.controls;
  }
  searchedData:any=[];
  showAdd !: boolean;
  showUbdate !:boolean;
     Qusetions =
     [{"id":1,"Title":"Clinical Specialist","Category":"Hard Tile & Stone","Owner":"Isaiah","Date":"8/5/2023","Description":"Infections of urethra in pregnancy, third trimester"},
     {"id":2,"Title":"Teacher","Category":"Drywall & Acoustical (FED)","Owner":"Ellary","Date":"3/24/2023","Description":"Burn of second degree of left forearm"},
     {"id":3,"Title":"Nurse Practicioner","Category":"Wall Protection","Owner":"Bucky","Date":"11/4/2022","Description":"Corrosion of third degree of oth site of trunk, init encntr"},
     {"id":4,"Title":"Recruiting Manager","Category":"Site Furnishings","Owner":"Edeline","Date":"7/18/2023","Description":"Other cervical disc disorders, mid-cervical region"},
     {"id":5,"Title":"Data Coordinator","Category":"Temp Fencing, Decorative Fencing and Gates","Owner":"Vitoria","Date":"12/11/2022","Description":"Unspecified injury of right kidney, subsequent encounter"},
     {"id":6,"Title":"Payment Adjustment Coordinator","Category":"Glass & Glazing","Owner":"Jewelle","Date":"7/29/2023","Description":"Sltr-haris Type I physeal fracture of lower end of humerus"},
     {"id":7,"Title":"Account Representative III","Category":"Glass & Glazing","Owner":"Pip","Date":"7/22/2023","Description":"Other superficial bite of hip, right hip, sequela"},
     {"id":8,"Title":"Analyst Programmer","Category":"Structural & Misc Steel Erection","Owner":"Ertha","Date":"6/17/2023","Description":"Accidental malfunction of other larger firearm"},
     {"id":9,"Title":"Statistician I","Category":"Drywall & Acoustical (MOB)","Owner":"Tracie","Date":"6/13/2023","Description":"Occup of hv veh injured in collision w 2/3-whl mv nontraf"},
     {"id":10,"Title":"Recruiting Manager","Category":"Prefabricated Aluminum Metal Canopies","Owner":"Hermine","Date":"4/14/2023","Description":"Occup of pk-up/van inj in clsn w unsp mv in traf, sequela"},
     {"id":11,"Title":"Biostatistician I","Category":"Roofing (Metal)","Owner":"Jeth","Date":"3/25/2023","Description":"Disp fx of acromial process, r shldr, subs for fx w malunion"},
     {"id":12,"Title":"Payment Adjustment Coordinator","Category":"Structural & Misc Steel Erection","Owner":"Parsifal","Date":"4/16/2023","Description":"Gonorrhea complicating pregnancy, second trimester"},
     {"id":13,"Title":"Physical Therapy Assistant","Category":"Termite Control","Owner":"Val","Date":"10/27/2022","Description":"Attention and concentration deficit following cerebral infrc"},
     {"id":14,"Title":"VP Sales","Category":"EIFS","Owner":"Pierette","Date":"1/21/2023","Description":"Burn of 2nd deg mul sites of shldr/up lmb, except wrs/hnd"},
     {"id":15,"Title":"VP Accounting","Category":"Epoxy Flooring","Owner":"Dulce","Date":"12/22/2022","Description":"Other insect allergy status"},
     {"id":16,"Title":"Human Resources Manager","Category":"Prefabricated Aluminum Metal Canopies","Owner":"Nancy","Date":"6/6/2023","Description":"Open bite of finger without damage to nail"},
     {"id":17,"Title":"Systems Administrator III","Category":"Construction Clean and Final Clean","Owner":"Boycey","Date":"12/1/2022","Description":"Displacement of balloon (counterpulsation) device"},
     {"id":18,"Title":"Web Developer III","Category":"Structural and Misc Steel (Fabrication)","Owner":"Findlay","Date":"7/28/2023","Description":"Displ spiral fx shaft of l femr, 7thQ"},
     {"id":19,"Title":"Pharmacist","Category":"RF Shielding","Owner":"Lilia","Date":"11/12/2022","Description":"Fracture of cervical vertebra and other parts of neck"},
     {"id":20,"Title":"Sales Associate","Category":"Construction Clean and Final Clean","Owner":"Gwendolyn","Date":"4/14/2023","Description":"Toxic effect of carbon dioxide, intentional self-harm, init"}]
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.initEvent();
    this.addEvents();
  }

  initEvent(){
    this.eventTest = this.formBuilder.group({
      Owner: ['', [Validators.required]],
      Date:[''],
      Title :['',],
      Category:[''],
    });
  }
  filtterEventTest(){

  }
  // initAddEvent(){
  //   this.formValue = this.formBuilder.group({
  //     Id:[],
  //     Owner: [''],
  //     Title:[''],
  //     Category :['',],
  //     Date:[''],
  //     Description:[''],
  //   });
  // }
  onChangeQusetions($event:any) {
    const id = $event.target.value;
    const ischeckes = $event.target.checked;
    this.Qusetions = this.Qusetions.map((item) => {
      if (item.id == id) {
        item = ischeckes;
        return item;
      }
      return item;
    });
    let formatedArr = this.Qusetions.filter((Qusetions)=>{
      return this.Qusetions
      // .isSelected == true
    });
    console.log(formatedArr)
  }
  getSearchType(event: any) {
      this.eventTest = event.target.value;
  }
  filterButtenFun(event: any){
    // console.log("mahmoud", this.drobDownForm.value)
    let key =  this.eventTest.value;
    console.log(key)
  //   this.searchedData =  this.Qusetions.filter((item)=>{
  //      if(item.degree == key.degree && item.time == key.time  && item.name == key.name && item.level == key.level) {
  //        return item
  //      }
  //      return null
  //  });
  }
  applyFilter(event: any) {
     let key = event.target.value.trim().toLowerCase();
     this.searchedData =  this.Qusetions.filter((item)=>{
        return item.Owner.toLocaleLowerCase().includes(key)
    });
  }
  addEvents(){
    this.showAdd=true;
    this.showUbdate=false;
    this.formValue = this.formBuilder.group({
      Id: [''],
      Owner: [''],
      Title:[''],
      Category :['',],
      Date:[''],
      Description:[''],
    });
  }
  deleteEvent(){
  } 
  editEvent(item:any){
    this.showAdd=false;
    this.showUbdate=true;
    this.formValue = this.formBuilder.group({
      Id: [''],
      Owner: [''],
      Title:[''],
      Category :['',],
      Date:[''],
      Description:[''],
    });
    this.formValue.controls['Id'].setValue(item.id);
    this.formValue.controls['Owner'].setValue(item.Owner);
    this.formValue.controls['Title'].setValue(item.Title);
    this.formValue.controls['Category'].setValue(item.Category);
    this.formValue.controls['Date'].setValue(item.Date);
    this.formValue.controls['Description'].setValue(item.Description);
  }
  postEvent(){
    

  }
  updateEvent(){

  }
}
