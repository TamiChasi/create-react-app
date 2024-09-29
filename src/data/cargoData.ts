export interface CargoRequest {
    CargoSearchKey: string;
    CargoQuestions: any | null;
    IsTooMuchData: boolean;
  }
  
  export interface CargoResult {
    ComputedCargoIdentifierKey: string;
    CargoIdentifierKey1: string;
    CargoIdentifierKey2: string;
    CargoIdentifierKey3: string;
    CargoIdentifierTypeID: number;
    CargoIdentifierTypeName: string;
    UserFriendlyComputedCargoIdentifier: string;
    LeadDocumentNumber: string;
    OrganizationUnitName: string;
    ArrivalDate: string;
    ContactDetails: string;
    ContactSite: string;
    ContactPhoneNumber: string;
    CargoSearchStatus: number;
    CargoDescription: string | null;
    RecipientName: string | null;
    RecipientAddress: string | null;
    RequiredLicenseForCargo: any[];
    UserFriendlyCargoStatus: string;
    IsAllowedToSubmit: boolean;
  }
  
  export interface CargoData {
    CargoRequest: CargoRequest;
    CargoResult: CargoResult[];
    ErrorText: string | null;
    ErrorLevel: number;
  }
  
 