import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.css']
})
export class MyformComponent implements OnInit {

  constructor() { 
  
  }

  ngOnInit(): void {
    var slider = <HTMLInputElement>document.getElementById("myRange");
    var output =<HTMLInputElement>document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      const val = output.innerHTML;
    }
  }

}
