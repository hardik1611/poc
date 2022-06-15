import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styleUrls: ['./poc.component.scss']
})
export class PocComponent implements OnInit {
  selectedPOC = 1;
  selectedOption = 'A';
  pocInputs = {
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    input5: '',
    input6: '',
    input7: '',
    input8: '',
    input9: '',
    input10: '',
    input11: '',
    input12: '',
    input13: '',
    input14: '',
    input15: '',
    input16: '',
    input17: '',
    input18: '',
    input19: '',
    input20: '',
  };
  selectedText = [
    { "id": 1, "number": "K3483483344", "state": "CA", "active": true },
    { "id": 2, "number": "K3483483345", "state": "CA", "active": true },
    { "id": 3, "number": "K3483483346", "state": "CA", "active": true },
    { "id": 4, "number": "K3483483347", "state": "CA", "active": true },
    { "id": 5, "number": "K3483483348", "state": "CA", "active": true },
    { "id": 6, "number": "K3483483348", "state": "CA", "active": true },
    { "id": 7, "number": "K3483483348", "state": "CA", "active": true },
    { "id": 8, "number": "K3483483348", "state": "CA", "active": true },
    { "id": 9, "number": "K3483483348", "state": "CA", "active": true },
    { "id": 10, "number": "K3483483348", "state": "CA", "active": true },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  copy(val: any): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = JSON.stringify(val);
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

}
