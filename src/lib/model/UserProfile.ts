export interface UserProfile {
  gender: string;
  dateOfBirth: string;
  nationalID: string;
  userId: string;
  personId: string;
  empId: string;
  firstNameEn: string;
  lastNameEN: string;
  firstName: string;
  lastName: string;
  preferredNameEn: string;
  userName: string;
  email: string;
  hiredDate: string;
  resignDate: string;
  positionCode: string;
  jobTitle: string;
  managerID: string;
  companyCode: string;
  businessUnitCode: string;
  functionCode: string;
  subFunction1Code: string;
  subFunction2Code: string;
  subFunction3Code: string;
  subFunction4Code: string;
  subFunction5Code: string;
  subFunction6Code: string;
  subFunction7Code: string;
  workingLocation: string;
  country: string;
  officePhone: string;
  ipPhone: string;
  status: boolean;
  costCenter: string;
  jobLevel: string;
  multipleJob: string;
  jobLevelDoa: string;
  jobLevelDoaNew: string;
  userType: string;
  jobStatus: string;
  userPrincipalName: string;
  jobLevelModel: JobLevelModel;
  companyModel: CompanyModel;
  businessUnitModel: BusinessUnitModel;
  functionModel: FunctionModel;
  subFunction1Model: SubFunction1Model;
  subFunction2Model: SubFunction2Model;
  LanguageCode: string;
  manager: Manager;
}
export interface JobLevelModel {
  code: string;
  name: string;
  status: boolean;
}

export interface CompanyModel {
  code: string;
  name: string;
  status: boolean;
}

export interface BusinessUnitModel {
  code: string;
  name: string;
  status: boolean;
}

export interface FunctionModel {
  code: string;
  name: string;
  status: boolean;
}

export interface SubFunction1Model {
  code: string;
  name: string;
  status: boolean;
}

export interface SubFunction2Model {
  code: string;
  name: string;
  status: boolean;
}

export interface Manager {
  userId: string;
  personId: string;
  empId: string;
  firstNameEn: string;
  lastNameEN: string;
  firstName: string;
  lastName: string;
  preferredNameEn: string;
  userName: string;
  email: string;
  hiredDate: string;
  resignDate: string;
  positionCode: string;
  jobTitle: string;
  managerID: string;
  companyCode: string;
  businessUnitCode: string;
  functionCode: string;
  subFunction1Code: string;
  subFunction2Code: string;
  subFunction3Code: string;
  subFunction4Code: string;
  subFunction5Code: string;
  subFunction6Code: string;
  subFunction7Code: string;
  workingLocation: string;
  country: string;
  officePhone: string;
  ipPhone: string;
  status: boolean;
  costCenter: string;
  jobLevel: string;
  multipleJob: string;
  jobLevelDoa: string;
  jobLevelDoaNew: string;
  userType: string;
  jobStatus: string;
  userPrincipalName: string;
}
