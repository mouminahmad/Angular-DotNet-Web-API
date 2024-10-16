import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentIndex = 0;
  patientCount = 15000;
  doctorCount = 100;
  departmentCount = 20;
  serviceCount = 50;

  features = [
    {
      title: '24/7 Emergency Care',
      description: 'We are always ready to provide emergency healthcare services around the clock.'
    },
    {
      title: 'Advanced Technology',
      description: 'Our hospital is equipped with the latest medical technology to provide the best care.'
    },
    {
      title: 'Skilled Professionals',
      description: 'We have a team of experienced and highly skilled doctors and medical staff.'
    },
    {
      title: 'Patient Satisfaction',
      description: 'Patient care and satisfaction is our top priority, ensuring quality services for all.'
    }
  ];

 

  testimonials = [
    { text: "The staff was very friendly and attentive. I received the best care!", author: "Fatima" },
    { text: "Amazing experience! The doctors really listened to my concerns.", author: "Sehar Shakeel" },
    { text: "I felt comfortable and well taken care of throughout my treatment.", author: "Ali Hassan" },
    { text: "Highly professional and caring staff. I would recommend them to anyone!", author: "Usman" },
    { text: "Amazing experience! The doctors really listened to my concerns.", author: "Sehar Shakeel" },
    { text: "I felt comfortable and well taken care of throughout my treatment.", author: "Ali Hassan" },
    { text: "Highly professional and caring staff. I would recommend them to anyone!", author: "Usman" }
  
  ];

  get sliderTransform() {
    const offset = -this.currentIndex * (300 + 24); // Adjust for margin and width
    return `translateX(${offset}px)`;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length; // Loop to the start
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length; // Loop to the end
  }
}
