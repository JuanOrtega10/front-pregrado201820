/**
 * This class represents an author of the BookStore. 
 * It contains all the information relevant to the author.
 */
export class Author {
    /**
    * The author's id
    */
    id: number;

    /**
     * The author's name
     */
    name: string;

    /** Fecha de nacimiento del autor. Estamos utilizando de tipo  string. 
     * 
     */
    birthDate: any;
    /**
     * The location of the author's profile picture
     */
    image: string;

    /**
     * A brief description of the author's life
     */
    description: string;
    
}
