import { Component, OnInit } from '@angular/core';
import {Triesinfo} from './triesinfo';


@Component({
  selector: 'app-cowsandbull',
  templateUrl: './cowsandbull.component.html',
  styleUrls: ['./cowsandbull.component.css']
})
export class CowsandbullComponent implements OnInit {
title :string;
lockword:string;
congrats:string;
bulls:number;
cows:number;
len:number;
index:number;
tries?:Triesinfo[]=[];
triesinfo:Triesinfo;
wordlen:number;


  constructor() { }

  ngOnInit() {
    this.title ="Welcome to Cows&Bulls";
    this.index=0;
    
  }

   howManyRepeated(str){
    try{ return str.toLowerCase().split("").sort().join("").match(/(.)\1+/g).length; }
    catch(e){ return 0; }
 }
 

  LockWord(num:number){
   console.log(num);
   this.wordlen=num;
   if(num===4){
   var i4 = Math.floor(Math.random() * 10);  
   var randomwords4 =["able","what","bike","play","kite","blue","cast","card","coat","dial","disk"];
   this.lockword = randomwords4[i4]; 
   }else if(num===3){
    var j = Math.floor(Math.random() * 10);  
    var randomwords3 =["fly","bye","eat","ate","sum","cry","buy","foe","got","put","sit"];
    this.lockword = randomwords3[j];
   }else{
    var k = Math.floor(Math.random() * 10);  
    var randomwords5 =["child","party","their","agent","frank","blast","chunk","water","scale","payer","basic"];
    this.lockword = randomwords5[k];
   }
      console.log(this.lockword);
  }
  
  handleError () {

    alert("please start the game");
  }
  onEnter(word:string){
    this.cows=0;
    this.bulls=0;
   

    word = word.toLowerCase();
    
    if(word===this.lockword){
      //this.congrats="you won this game";
      word="";
      alert("you won this game,please start the game again");
      location.reload();
      
    }else if(word.length!==this.wordlen){
       if(word.length===0){
         alert("please start the game");
       }
      alert("please enter "+this.wordlen+" letter to continue gaming");
    }else
      {
      var dup =this.howManyRepeated(word);
      if(dup===0){
      this.len=word.length;
      var i;
      var cow_count=0;
      var bull_count=0;
      
      for(i=0;i<this.len;i++){       
         if(word[i]===this.lockword[i]) {                        
          this.cows=++cow_count;
          
         }else{
           var j;
           for(j=0;j<this.len;j++){
             if(word[i]===this.lockword[j]){ 
          this.bulls=++bull_count;       
                 
             }
             
           }          
           
         }
         
        }
        this.triesinfo = new Triesinfo(word,this.bulls,this.cows);
         console.log(this.triesinfo); 
         this.tries.push(this.triesinfo); 
         this.congrats="please try again";
        }else{
          alert("please go thru the rules before playing game");
        }
      }
      
          }
       
  


}


