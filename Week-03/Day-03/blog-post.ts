'use strict';
export {};

class blogPost {
  authorname:string;
  title:string;
  text:string;
  publicationDate:string;

  constructor(tit:string, auth:string, pd:string, t:string) {
    this.title =  tit;
    this.authorname = auth;
    this.publicationDate = pd;
    this.text = t;
  }
}

let firstBlogPost = new blogPost('Lorem Ipsum', 'John Doe', '2000.05.04', 'Lorem ipsum dolor sit amet');
let secondBlogPost = new blogPost('Wait but why', 'Tim Urban', '2010.10.10', 'A popular long-form, stick-figure-illustrated blog about almost everything.');
let thirdBlogPost = new blogPost('One Engineer Is Trying to Get IBM to Reckon With Trump', 'William Turton', '2017.03.28', 'Daniel Hanley, a cybersecurity engineer at IBM, doesn’t want to be the center of attention. When I asked to take his picture outside one of IBM’s New York City offices, he told me that he wasn’t really into the whole organizer profile thing.');