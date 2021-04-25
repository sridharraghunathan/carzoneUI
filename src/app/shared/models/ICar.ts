export interface ICarHomeCarousel {
  carCaption: string;
  carText: string;
  carImage: string;
}

export interface ICarInfo {
  carId: number;
  carName: string;
  price: string;
  location: string;
  saleType: string;
  featured: boolean;
  fuelType: string;
  miles: string;
  transmission: string;
  bodyStyle: string;
  color: string;
  yearMake: number;
  model: string;
  condition: string;
  engine: string;
  interiorColor: string;
  doors: number;
  passengers: number;
  vinNo: string;
  milege: number;
  carDescription: string;
  createDate: string;
  modifiedDate: string;
  carPhotos: ICarPhoto[];
  carFeature: ICarFeature[];
}

export interface ICarFeature {
  carId: number;
  availableFeature: string;
  createDate: string;
  modifiedDate: string;
}

export interface ICarPhoto {
  carId: number;
  pictureUrl: string;
  photoId: number;
  createDate: string;
  modifiedDate: string;
}
export interface IExecutiveTeam {
  firstName: string;
  lastName: string;
  designation: string;
  photo: string;
  createDate: string;
  endDate: string;
}

export interface ISearch {
  CarName: null | string;
  Model: null | string;
  YearMake: null | string | number;
  Location: null | string;
  BodyStyle: null | string;
  Price?: number[] | [0, null];
}

export interface ICompanyService {
  serviceIcon: string;
  serviceTagLine: string;
  serviceSupport: string;
  createdate: Date;
  modifiedDate: Date;
}

export interface ICompanyWebsiteInfo{
  phone: string;
  email: string;
  web: string;
  fax: string;
  timings: string;
  createdate: Date;
  modifiedDate: Date;
}

export interface IGeneralEnquiryMessage{
  FullName: string;
  Email: string;
  Subject: string;
  ContactNumber: string ;
  Comments: string;
}

export interface IResponse {
  response: boolean;
}
