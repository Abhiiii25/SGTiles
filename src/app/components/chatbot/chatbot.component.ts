import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {

  Answer: string = '';
  Question: string = '';
  isLoading: boolean = false; // Add a loading state

  constructor(private _auth: AuthService) { }

  // findAnswer(): void {
  //   console.log("functions is called");
  //   if (this.Question.trim()) {
  //     this.isLoading = true; // Start loading
  //     this._auth.chatAnswer(this.Question).subscribe(
  //       (data:any) => {
  //         this.Answer = data.replay;
  //         this.isLoading = false; // Stop loading
  //       },
  //       (error) => {
  //         console.log(error);
  //         this.isLoading = false; // Stop loading
  //         alert('Failed to get answer. Please try again later.');
  //       }
  //     );
  //   } else {
  //     alert('Please enter a valid question!');
  //   }
  // }
  findAnswer(): void {
    console.log("Function is called");
    if (this.Question.trim()) {
      this.isLoading = true; // Start loading
      this._auth.chatAnswer(this.Question).subscribe(
        (data: any) => {
          // Make sure you're getting the correct response data
          this.Answer = this.randomizeContent(data);  // Change `replay` to `reply` based on backend response
          this.isLoading = false; // Stop loading
        },
        (error) => {
          console.log(error);
          this.isLoading = false; // Stop loading
          alert('Failed to get answer. Please try again later.');
        }
      );
    } else {
      alert('Please enter a valid question!');
    }
  }



  // randomizeContent(content: string): string {
  //   let formattedAnswer = this.Answer.replace(/\*\*(.*?)\*\*/g, '<h3>$1</h3>');

  // // Replace * text with <ul><li> (Bullet points)
  // formattedAnswer = formattedAnswer.replace(/\* (.*?)\n/g, '<ul><li>$1</li></ul>\n');

  // // Optionally: Replace any new lines or paragraphs (if needed)
  // formattedAnswer = formattedAnswer.replace(/\n/g, '<p>$&</p>');

  // return formattedAnswer;
  // }


  
  randomizeContent(content: string): string {
    const sections = content.split('\n');
    const randomSections: string[] = [];

    sections.forEach((line) => {
      if (Math.random() > 0.3) {  // Randomly include sections (70% chance to include a section)
        randomSections.push(line);
      }
    });

    // Randomize order of sections
    randomSections.sort(() => Math.random() - 0.5);
    return randomSections.join('\n');
  }

}




// import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
// import { error } from 'console';
// import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-chatbot',
//   imports: [CommonModule,FormsModule,ReactiveFormsModule],
//   templateUrl: './chatbot.component.html',
//   styleUrl: './chatbot.component.css'
// })
// export class ChatbotComponent {

//   Answer: string = '';
//   Question: string = '';
//   constructor(private _auth:AuthService) { }

//   findAnswer():void{
//     if(this.Question){
//       this._auth.chatAnswer(this.Question).subscribe(
//         (data:any)=>{
//           this.Answer=data.replay;
//         },
//         (error)=>{
//           console.log(error);
//           alert("Failed to get answer")
//         }
//       )
//     }
//   }

// }
