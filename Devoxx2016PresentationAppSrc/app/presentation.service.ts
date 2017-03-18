import {Injectable} from "@angular/core";
import {Presentation} from "./presentation";

@Injectable()
export class PresentationService {

  presentations: Presentation[];

  constructor() {
    this.presentations =
      [
        { title: "Zen & The Art of Angular2",
          presenter: "Igor Minar",
          description:"Angular 2 is a full platform that encompasses " +
          "the needs of our developer community. Most successfull product " +
          "teams have investments across web, mobile web, installed mobile " +
          "apps and even installed desktop applications - Angular 2 supports " +
          "all of these things. In this session we’ll focus on how we're addressing " +
          "the full space of development needs in Angular 2 and talk a little bit about what’s to come.",
          image: "IgorMinar.jpg"
        },
        { title: "JavaEE, TypeScript and Angular2",
          presenter: "Antonio Concalves and Sebastien Pertus",
          description: "This University is targeted at Java developers who want to discover " +
          "TypeScript and how to use an Angular2 front-end with a Java back-end. It will be " +
          "divided into three parts. 1) Develop Java EE micro-services using WildFly Swarm. 2) " +
          "Discover the language TypeScript. 3) Create an Angular2 web interface using TypeScript " +
          "to interact with the REST back-end. /n Come to this talk. You will see plenty of code and " +
          "nice demos running on a Mac, a Windows machine…. and in the Cloud !",
          image: "AntonioGoncalves.jpg"
        }
      ]
  }

  getPresentations(): Presentation[] {
    return this.presentations;
  }

  addPresentation(presentation: Presentation) {
    this.presentations.push(presentation);
  }

}
