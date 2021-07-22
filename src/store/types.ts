
export interface InitState {
users: Array<any>;
userDetails: Array<any>;
keyWords: string;
toggleMenu: boolean;
  salaryMin: number;
  salaryMax: number;
  toggleClass: boolean;
  delItemId: number;
  modalClass: boolean;
  showSalaryClass: boolean;
  itemsPerPage: number;
  workStatus: string;
  vacationStatus: string;
  firedStatus: string;
  usersSort: boolean;
  totalSalary: number;
}

export interface IUser{
   id: number
   name: string
  photo: string
  position: string
  salary: number
  status: string
  entryDate: string
 
}