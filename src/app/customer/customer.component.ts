import { Component, inject } from '@angular/core';
import Swal from 'sweetalert2'
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {

  typeDocument: string;
  document: string;
  documentTypes = {
                    "documents": [
                            {
                              "nombre": "Cedula",
                              "value": "c"
                            },
                            {
                              "nombre": "Pasaporte",
                              "value": "p"
                            }
                      ]
                  };

  constructor(private service: CustomerService){
    this.typeDocument = "";
    this.document = "";
  }

  showMessage(html : string, icon: string){
    Swal.fire({
      title: "Consulta realizada",
      icon: "info",
      html: html
    });
  }

  getCustomer(){
    this.service.getCustomer({"typeDoc" : this.typeDocument, "document": this.document}).subscribe( {
          next: (data) => {
            let info = `Primer Nombre: ${data.customers[0].firstName} <br /> 
                        Segundo Nombre: ${data.customers[0].secondName} <br />
                        Primer Apellido: ${data.customers[0].surname} <br />
                        Segundo Apellido: ${data.customers[0].secondSurname} <br />
                        Dirección: ${data.customers[0].address} <br />
                        Teléfono: ${data.customers[0].telephone} <br />
                        Ciudad: ${data.customers[0].city}`;
            this.showMessage(info, "info");
          }, 
          error: (data) =>{
            let response = `${data.error.response} <br /> Error ${data.status}`;
            this.showMessage(response, "Error");
          }
        }
    )
  }

}
