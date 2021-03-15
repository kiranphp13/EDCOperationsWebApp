import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "src/app/models/user";
import { AuthService } from "src/app/auth.service";

function actionCellRenderer(params) {
  let eGui = document.createElement("div");

  let editingCells = params.api.getEditingCells();
  // checks if the rowIndex matches in at least one of the editing cells
  let isCurrentRowEditing = editingCells.some((cell) => {
    return cell.rowIndex === params.node.rowIndex;
  });
}
  @Component({
    selector: 'app-aggrid-user',
    templateUrl: './aggrid-user.component.html',
    styleUrls: ['./aggrid-user.component.css']
  })
  export class AggridUserComponent implements OnInit {
    private gridApi;
    private gridColumnApi;

     
    private defaultColDef;
    private defaultColGroupDef;
    private columnTypes;
    private rowData: [];
    users: User[];
    constructor(private router: Router, private apiService: AuthService) {
      this.defaultColDef = {
        width: 150,
        editable: true,
        filter: 'agTextColumnFilter',
        floatingFilter: true,
        resizable: true,
      };
      this.defaultColGroupDef = { marryChildren: true };
      this.columnTypes = {
        numberColumn: {
          width: 130,
          filter: 'agNumberColumnFilter',
        },
        medalColumn: {
          width: 100,
          columnGroupShow: 'open',
          filter: false,
        },
        nonEditableColumn: { editable: false },
        dateColumn: {
          filter: 'agDateColumnFilter',
          filterParams: {
            comparator: function (filterLocalDateAtMidnight, cellValue) {
              var dateParts = cellValue.split('/');
              var day = Number(dateParts[0]);
              var month = Number(dateParts[1]) - 1;
              var year = Number(dateParts[2]);
              var cellDate = new Date(year, month, day);
              if (cellDate < filterLocalDateAtMidnight) {
                return -1;
              } else if (cellDate > filterLocalDateAtMidnight) {
                return 1;
              } else {
                return 0;
              }
            },
          },
        },
      }
    }

    ngOnInit() {
      //if (!window.localStorage.getItem('token')) {
      //  this.router.navigate(['login']);
      //  return;
      //}
      if (localStorage.getItem("currentUser") === null) {
        this.router.navigate(['login'])
      }
      else if (localStorage.getItem("currentUserRole") !== "Admin") {
        this.router.navigate(['notauthorized'])
      }
      this.apiService.getUsers()
        .subscribe(data => {
          this.users = data;
        });
    }
    columnDefs = [      { field: 'id', width: '150' },
      { field: 'fullName', sortable: true, filter: true, width: '150' },
      { field: 'userName', sortable: true, filter: true, width: '150' },
      { field: 'role', sortable: true, filter: true, width: '150' },
      { field: 'email', sortable: true, filter: true, width: '150' },
      { field: 'phone', sortable: true, filter: true, width: '150' },
      { field: 'address', sortable: true, filter: true, width: '150' },
      {
        headerName: 'Edit',
        cellRenderer: 'buttonRenderer',
        cellRendererParams: {
          onClick: this.onEditButtonClick.bind(this),
          label: 'Edit'
        }
      }
    ];

    onEditButtonClick(user: User) {
      //this.api.startEditingCell({
      //  rowIndex: params.rowIndex,
      //  colKey: 'make'
      localStorage.removeItem("editUserId");
      localStorage.setItem("editUserId", user.id.toString());
      this.router.navigate(['edituser']);
       
    }

    //rowData = [
    //  { make: 'Toyota', model: 'Celica', price: 35000 },
    //  { make: 'Ford', model: 'Mondeo', price: 32000 },
    //  { make: 'Porsche', model: 'Boxter', price: 72000 }
    //];


  }
