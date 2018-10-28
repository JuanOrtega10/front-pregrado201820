/**
 * This class represents an author of the BookStore. 
 * It contains all the information relevant to the author.
 */
export interface Author {
    /**
    * The author's id
    */
    id: number;

    /**
     * The author's name
     */
    name: string;

    /**
     * The location of the author's profile picture
     */
    image: string;

    /**
     * A brief description of the author's life
     */
    description: string;
    
     /**
     * The author's birthDate 
     */
    birthDate: any;
}
