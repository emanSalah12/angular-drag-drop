import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Subscription } from 'rxjs';
import { DispatcherOrderViewModel } from '../models/dispatcher-order.model';
@Component({
  selector: 'app-test-drag-drop',
  templateUrl: './test-drag-drop.component.html',
  styleUrls: ['./test-drag-drop.component.css']
})
export class TestDragDropComponent implements OnInit {
  ITEMS2 = 'ITEMS2';
  public ordersReady = this.getReadyOrders();
  public ordersProgress = this.getProgressOrders()
  subs = new Subscription();

drag :boolean = false


  constructor(private dragulaService: DragulaService) {
    this.dragulaService.createGroup('ITEMS', {
      direction: 'horizontal',
      moves: (el, source, handle, sibling) => !el.classList.contains('nodrag')
    });
    
  
 
    this.subs.add(this.dragulaService.dropModel("ITEMS")
      .subscribe(({ name, el, target, source, sibling, sourceModel, targetModel, item }) => {
      this.drag = true

        console.log("dropModel");
        console.log(name);
        console.log(el);
        console.log(target);
        console.log(source);
        console.log(sourceModel);
        console.log(targetModel);
        console.log(item);

          setTimeout(() => {
        this.drag = false
            
          }, 1000);
      })
    );





  }
  ngOnInit(): void {
  }
  getReadyOrders(): DispatcherOrderViewModel[] {
    return [
      {
        CompanyID: 0,
        ID: 3429143,
        TripID: 1787039,
        Code: "B870nyZSD4",
        OrderNumber: "-",
        Name: " mostafa",
        Address: "التحرير",
        Mobile: "0123456789",
        ServicesCount: 0,
        PlannedDistance: 0.6,
        PlannedDeliveryTime: "2022-04-10T12:19:27.0632057",
        RemainingTime: 867,
        DeliveryTimeStatusName: "URGENT",
        DeliveryTimeStatus: 2,
        DistanceStatusName: "CLOSED_TO_BRANCH",
        DistanceStatus: 0,
        Duration: 8,
        Amount: 0,
        Date: "2022-04-10T11:44:27",
        Status: 2,
        StatusName: "On Trip",
        PlannedLatitude: 31.24746602321279,
        PlannedLongitude: 29.97743859065263,
        HasGoogleLocation: true,
        IsTopPriority: true,
        IsPaused: false,
        HasTimer: true,
        isSelected: false,
        Distance: 0,
        SpentTime: 1239,
        RateName: "NOT_RATED",
        Rate: 0,
        Note: "aaaaaaaaaaaa",
        OrderDeliveryTime: 30,
        CustomerID: 67970,
        Longitude: 0,
        Latitude: 0,
        BranchID: 2,
        IsRealTime: false,
        IsServiceOpened: false,
        IsTransite: false,
        District: null,
        SyncedTime: null,
        ShowPrint: true,
        Services: null
      },
      // {
      //   CompanyID:0,
      //   ID:3429143 ,
      //   TripID:1787039 ,
      //   Code:"B870nyZSD4" ,
      //   OrderNumber:"-" ,
      //   Name: " mahmoud",
      //   Address:"التحرير" ,
      //   Mobile:"0123456789" ,
      //   ServicesCount:0 ,
      //   PlannedDistance:0.6 ,
      //   PlannedDeliveryTime: "2022-04-10T12:19:27.0632057",
      //   RemainingTime:867 ,
      //   DeliveryTimeStatusName:"URGENT" ,
      //   DeliveryTimeStatus: 2,
      //   DistanceStatusName: "CLOSED_TO_BRANCH",
      //   DistanceStatus:0,
      //   Duration:8 ,
      //   Amount:0 ,
      //   Date: "2022-04-10T11:44:27",
      //   Status:2,
      //   StatusName: "On Trip",
      //   PlannedLatitude: 31.24746602321279,
      //   PlannedLongitude: 29.97743859065263,
      //   HasGoogleLocation: true,
      //   IsTopPriority: true,
      //   IsPaused: false,
      //   HasTimer: true,
      //   isSelected: false,
      //   Distance:0 ,
      //   SpentTime:1239 ,
      //   RateName:"NOT_RATED" ,
      //   Rate: 0,
      //   Note: "aaaaaaaaaaaa",
      //   OrderDeliveryTime: 30,
      //   CustomerID: 67970,
      //   Longitude: 0,
      //   Latitude: 0,
      //   BranchID:2 ,
      //   IsRealTime:  false,
      //   IsServiceOpened:  false,
      //   IsTransite:  false,
      //   District:null ,
      //   SyncedTime:null,
      //   ShowPrint: true,
      //   Services: null
      // },
      // {
      //   CompanyID:0,
      //   ID:3429143 ,
      //   TripID:1787039 ,
      //   Code:"B870nyZSD4" ,
      //   OrderNumber:"-" ,
      //   Name: "  eman",
      //   Address:"التحرير" ,
      //   Mobile:"0123456789" ,
      //   ServicesCount:0 ,
      //   PlannedDistance:0.6 ,
      //   PlannedDeliveryTime: "2022-04-10T12:19:27.0632057",
      //   RemainingTime:867 ,
      //   DeliveryTimeStatusName:"URGENT" ,
      //   DeliveryTimeStatus: 2,
      //   DistanceStatusName: "CLOSED_TO_BRANCH",
      //   DistanceStatus:0,
      //   Duration:8 ,
      //   Amount:0 ,
      //   Date: "2022-04-10T11:44:27",
      //   Status:2,
      //   StatusName: "On Trip",
      //   PlannedLatitude: 31.24746602321279,
      //   PlannedLongitude: 29.97743859065263,
      //   HasGoogleLocation: true,
      //   IsTopPriority: true,
      //   IsPaused: false,
      //   HasTimer: true,
      //   isSelected: false,
      //   Distance:0 ,
      //   SpentTime:1239 ,
      //   RateName:"NOT_RATED" ,
      //   Rate: 0,
      //   Note: "aaaaaaaaaaaa",
      //   OrderDeliveryTime: 30,
      //   CustomerID: 67970,
      //   Longitude: 0,
      //   Latitude: 0,
      //   BranchID:2 ,
      //   IsRealTime:  false,
      //   IsServiceOpened:  false,
      //   IsTransite:  false,
      //   District:null ,
      //   SyncedTime:null,
      //   ShowPrint: true,
      //   Services: null
      // },
    ]
  }
  getProgressOrders(): DispatcherOrderViewModel[] {
    return [
      {
        CompanyID: 0,
        ID: 3429143,
        TripID: 1787039,
        Code: "B870nyZSD4",
        OrderNumber: "-",
        Name: "test0",
        Address: "التحرير",
        Mobile: "0123456789",
        ServicesCount: 0,
        PlannedDistance: 0.6,
        PlannedDeliveryTime: "2022-04-10T12:19:27.0632057",
        RemainingTime: 867,
        DeliveryTimeStatusName: "URGENT",
        DeliveryTimeStatus: 2,
        DistanceStatusName: "CLOSED_TO_BRANCH",
        DistanceStatus: 0,
        Duration: 8,
        Amount: 0,
        Date: "2022-04-10T11:44:27",
        Status: 3,
        StatusName: "On Trip",
        PlannedLatitude: 31.24746602321279,
        PlannedLongitude: 29.97743859065263,
        HasGoogleLocation: true,
        IsTopPriority: true,
        IsPaused: false,
        HasTimer: true,
        isSelected: false,
        Distance: 0,
        SpentTime: 1239,
        RateName: "NOT_RATED",
        Rate: 0,
        Note: "aaaaaaaaaaaa",
        OrderDeliveryTime: 30,
        CustomerID: 67970,
        Longitude: 0,
        Latitude: 0,
        BranchID: 2,
        IsRealTime: false,
        IsServiceOpened: false,
        IsTransite: false,
        District: null,
        SyncedTime: null,
        ShowPrint: true,
        Services: null
      },
      {
        CompanyID: 0,
        ID: 3429143,
        TripID: 1787039,
        Code: "B870nyZSD4",
        OrderNumber: "-",
        Name: "test",
        Address: "التحرير",
        Mobile: "0123456789",
        ServicesCount: 0,
        PlannedDistance: 0.6,
        PlannedDeliveryTime: "2022-04-10T12:19:27.0632057",
        RemainingTime: 867,
        DeliveryTimeStatusName: "URGENT",
        DeliveryTimeStatus: 2,
        DistanceStatusName: "CLOSED_TO_BRANCH",
        DistanceStatus: 0,
        Duration: 8,
        Amount: 0,
        Date: "2022-04-10T11:44:27",
        Status: 2,
        StatusName: "On Trip",
        PlannedLatitude: 31.24746602321279,
        PlannedLongitude: 29.97743859065263,
        HasGoogleLocation: true,
        IsTopPriority: true,
        IsPaused: false,
        HasTimer: true,
        isSelected: false,
        Distance: 0,
        SpentTime: 1239,
        RateName: "NOT_RATED",
        Rate: 0,
        Note: "aaaaaaaaaaaa",
        OrderDeliveryTime: 30,
        CustomerID: 67970,
        Longitude: 0,
        Latitude: 0,
        BranchID: 2,
        IsRealTime: false,
        IsServiceOpened: false,
        IsTransite: false,
        District: null,
        SyncedTime: null,
        ShowPrint: true,
        Services: null
      },
      {
        CompanyID: 0,
        ID: 3429143,
        TripID: 1787039,
        Code: "B870nyZSD4",
        OrderNumber: "-",
        Name: "test",
        Address: "التحرير",
        Mobile: "0123456789",
        ServicesCount: 0,
        PlannedDistance: 0.6,
        PlannedDeliveryTime: "2022-04-10T12:19:27.0632057",
        RemainingTime: 867,
        DeliveryTimeStatusName: "URGENT",
        DeliveryTimeStatus: 2,
        DistanceStatusName: "CLOSED_TO_BRANCH",
        DistanceStatus: 0,
        Duration: 8,
        Amount: 0,
        Date: "2022-04-10T11:44:27",
        Status: 3,
        StatusName: "On Trip",
        PlannedLatitude: 31.24746602321279,
        PlannedLongitude: 29.97743859065263,
        HasGoogleLocation: true,
        IsTopPriority: true,
        IsPaused: false,
        HasTimer: true,
        isSelected: false,
        Distance: 0,
        SpentTime: 1239,
        RateName: "NOT_RATED",
        Rate: 0,
        Note: "aaaaaaaaaaaa",
        OrderDeliveryTime: 30,
        CustomerID: 67970,
        Longitude: 0,
        Latitude: 0,
        BranchID: 2,
        IsRealTime: false,
        IsServiceOpened: false,
        IsTransite: false,
        District: null,
        SyncedTime: null,
        ShowPrint: true,
        Services: null
      },
    ]
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
