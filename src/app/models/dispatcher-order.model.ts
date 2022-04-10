export enum DeliveryTimeStatus {
    BEFORE_TIME = 0,
    ON_TIME,
    DELAY,
    URGENT,
}
export enum OrderRateOption {
    
    NOT_RATED = 0,

    EXCELLENT = 1,

    GOOD = 2,

    LATE = 3,

    TOO_LATE = 4,
}
export enum OrderStatus {
    
    CREATED = 0,

    READY = 1,

    ADDED_TO_TRIP = 2,

    DELIVERED = 3,

    CANCELED = 4,

    EXPIRED = 5,

    DELIVERED_MANUALLY = 6,

    CAN_NOT_DELIVER = 7,
    New = 8,

    SCHEDULED=9
}

export class DispatcherOrderViewModel {
    CompanyID:number;
    ID: number;
    TripID: number;
    Code: string;
    OrderNumber: string;
    Name: string;
    Address: string;
    Mobile: string;
    ServicesCount: number;
    PlannedDistance: number;
    PlannedDeliveryTime: string;
    CreatedDat?: string;
    RemainingTime: number;
    DeliveryTimeStatusName: string;
    DeliveryTimeStatus: DeliveryTimeStatus;
    DistanceStatusName: string;
    DistanceStatus:number;
    Duration: number;
    ServingTime?: number;
    Priority?: number;
    Amount: number;
    Date: string;
    Status: OrderStatus;
    StatusName: string
    PlannedLongitude: number;
    PlannedLatitude: number;
    HasGoogleLocation: boolean;
    IsTopPriority: boolean
    IsPaused: boolean
    HasTimer: boolean;
    isSelected: boolean;
    Distance: number;
    SpentTime: number;
    RateName: string;
    Rate: OrderRateOption;
    Note: string;
    OrderDeliveryTime: number
    CustomerID: number
    Longitude: number
    Latitude: number
    BranchName?: string;
    BranchID: number;
    IsRealTime: boolean = false;
    IsServiceOpened: boolean = false
    IsTransite: boolean = false;
    District: string;
    SyncedTime: any;
    ShowPrint: boolean
    Services: DispatcherOrderServiceViewModel[] = []
  }
  

export class DispatcherOrderServiceViewModel {
  Name: string;
  Image: string;
  OrderID: number
}