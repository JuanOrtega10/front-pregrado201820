import { Editorial } from '../editorial/editorial';
type DateString = {month: number,day: number,year: number};


export class Book {
    /**
    * The book's id
    */
    id: number;

    /**
    * The book's name
    */
    name: string;

    /**
    * The book's ISBN
    */
    isbn: string;

    /**
    * A brief summary of the book
    */
    description: string;

    /**
    * The location of the book's image
    */
    image: string;

    /**
     * The book's publishing date
     */
    publishingdate: DateString|string;
    

    /**
    * The editorial of the book
    */
    editorial: Editorial;
}
