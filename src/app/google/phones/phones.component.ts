import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.sass']
})
export class PhonesComponent implements OnInit {
  Reviews=[{
    name:'Abhishek Kumar',
    review:"I got mobile which is charging 10% per hour and i dont have a return policy also.",
    rating:2
  },
  {
    name:'Shikha Singh',
    review:" The Pixel contains Googless A11 Bionic system-on-chip, which is a six-core processor with two cores optimized for performance and 4 cores for efficiency.",
    rating:5
  },
  {
    name:'Shivam Kumar',
    review:"I think it’s still one of the best your money can buy. Spending 39,990 for xs just for 30% faster processor ( who needs that, its already amazingly fast ) .",
    rating:3
  },{
    name:'Anjali Gupta',
    review:"Awesome just like a Performance beast.Best ever OLED screen with Top notch Performance Backed by A11Bionic Chipset.Battery life is average.Supb daylight Shots On this.",
    rating:4
  },{
    name:'Vaishali',
    review:"Hdfc bank debit card no cost emi is actually making fool of us. hdfc is taking me 5k extra against the scheme. please be aware dont go for the hdfc promo.",
    rating:1
  }]
  constructor() { }

  ngOnInit() {
  }

}
