import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

export interface PeriodicElement {
  terapeuta: string;
  position: number;
  fecha: number;
  documento: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, terapeuta: 'Hydrogen', fecha: 1.0079, documento: 'H'},
  {position: 2, terapeuta: 'Helium', fecha: 4.0026, documento: 'He'},
  {position: 3, terapeuta: 'Lithium', fecha: 6.941, documento: 'Li'},
  {position: 4, terapeuta: 'Beryllium', fecha: 9.0122, documento: 'Be'},
  {position: 5, terapeuta: 'Boron', fecha: 10.811, documento: 'B'},
  {position: 6, terapeuta: 'Carbon', fecha: 12.0107, documento: 'C'},
  {position: 7, terapeuta: 'Nitrogen', fecha: 14.0067, documento: 'N'},
  {position: 8, terapeuta: 'Oxygen', fecha: 15.9994, documento: 'O'},
  {position: 9, terapeuta: 'Fluorine', fecha: 18.9984, documento: 'F'},
  {position: 10, terapeuta: 'Neon', fecha: 20.1797, documento: 'Ne'},
];

@Component({
  selector: 'app-datosexp',
  templateUrl: './datosexp.component.html',
  styleUrls: ['./datosexp.component.css']
})
export class DatosexpComponent {
  id!: any;

  constructor(private route: ActivatedRoute) {}
  displayedColumns: string[] = [ 'position','terapeuta', 'fecha', 'documento'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  clickedRows = new Set<PeriodicElement>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
