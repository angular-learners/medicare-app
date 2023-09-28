import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  imageObject: Array<object> = [{
    image: 'assets/images/slider_image.jpg',
    thumbImage: 'assets/images/slider_image.jpg',
    alt: 'Slider1',
    title: 'Cardiology'
}, {
    image: 'assets/images/slider_image2.jpg', // Support base64 image
    thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
    title: 'Gynacology', //Optional: You can use this key if want to show image with title
    alt: 'Image alt', //Optional: You can use this key if want to show image with alt
    order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'Dentist', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},{
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'OPHTHALMOLOGY', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}, {
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'AESTHETIC', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'Slider2', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'Slider2', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'Slider2', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'Slider2', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
},
{
  image: 'assets/images/slider_image2.jpg', // Support base64 image
  thumbImage: 'assets/images/slider_image2.jpg', // Support base64 image
  title: 'Slider2', //Optional: You can use this key if want to show image with title
  alt: 'Image alt', //Optional: You can use this key if want to show image with alt
  order: 1 //Optional: if you pass this key then slider images will be arrange according @input: slideOrderType
}
];
}
