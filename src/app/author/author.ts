type DateString = {month: number,day: number,year: number};
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
    birthDate: DateString|string;
    /**
     * The location of the author's profile picture
     */
    image: string;

    /**
     * A brief description of the author's life
     */
    description: string;
    
}

