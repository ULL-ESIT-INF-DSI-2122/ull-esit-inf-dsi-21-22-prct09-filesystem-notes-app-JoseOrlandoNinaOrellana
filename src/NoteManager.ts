import * as fs from 'fs';
import * as chalk from 'chalk';
import { Note } from './Note';

/**
 * Clase NoteList
 * Permite manipular los archivos que contienen las notas
 */
export class NoteManager {
    /**
     * Crea un nuevo fichero
     * @param user Nombre del usuario
     */
    createFile(user: string) {
        fs.writeFile('notes/' + user + '.json', '', function (err) {
            if(err) 
                throw err;
        });
        fs.writeFileSync('notes/' + user + '.json', '[]');
    }

    /**
     * Comprueba si existe una nota
     * @param user Nombre del propetario de la nota
     * @param title Título de la nota
     * @returns Boolean indicando si exista una nota con ese título
     */
    exists(user: string, title: string): boolean {
        if(!fs.existsSync('notes/' + user + '.json'))
        {
            this.createFile(user);
            return false;
        }

        let notes: Note[] = this.read(user);

        for(const i in notes)
            if(notes[i].title === title)
                return true;
        
        return false;
    }

    /**
     * Lee un json que contiene las notas de un usuario
     * @param user Nombre del usuario
     * @returns Array de notas del usuario
     */
    read(user: string): Note[] {
        const file = fs.readFileSync('notes/' + user + '.json');
        return JSON.parse(file.toString());
    }

    /**
     * Escribe en el json un nota
     * @param user Nombre del usuario
     * @param note Nota a escribir
     */
    write(user: string, note: Note): string {
        if(!this.exists(user, note.title)) {
            let newNotes: Note[] = this.read(user);
            newNotes.push(note);
            fs.writeFileSync('notes/' + user + '.json', JSON.stringify(newNotes, null, 2), 'utf-8');
            return this.putColor('green', 'New note added!');
        }
        else
            return this.putColor('red', 'Note title taken!');
    }

    /**
     * Lista por consola los títulos de las notas de un usuario
     * @param user Nombre del usuario
     */
    listNotes(user: string): string {
        let output: string = '';
        output += this.putColor('green', 'Your notes') + '\n';
        let notes: Note[] = this.read(user);
        notes.forEach((note: Note) => {
            output += this.putColor(note.color, note.title) + '\n';
        });
        return output;
    }

    /**
     * Muestra por consola una nota
     * @param user Nombre del usuario
     * @param title Título de la nota
     */
    readNote(user: string, title: string): string {
        let output: string = '';

        if(this.exists(user, title)) {
            let notes: Note[] = this.read(user);
            notes.forEach((note: Note) => {
                if(note.title === title)
                {
                    output += this.putColor(note.color, note.title) + '\n';
                    output += this.putColor(note.color, note.body);
                }
            });
            return output;
        }
        else
            return this.putColor('red', 'Note not found');
    }

    /**
     * Elimina una nota de un usuario
     * @param user Nombre del usuario
     * @param title Título de la nota
     */
    removeNote(user: string, title: string): string {
        if(this.exists(user, title)) {
            let newNotes: Note[] = this.read(user);
            let index: number = newNotes.findIndex(note => note.title === title);
            newNotes.splice(index, 1);
            fs.writeFileSync('notes/' + user + '.json', JSON.stringify(newNotes, null, 2) , 'utf-8');
            return this.putColor('green', 'Note removed!');
        }
        else
            return this.putColor('red', 'No note found');
    }

    /**
     * Aplica un color a un texto
     * @param color Color
     * @param text Texto
     * @returns El texto con el color aplicado
     */
    putColor(color: string, text: string): string {
        switch(color) {
            case 'green':
                return chalk.green(text);
            case 'yellow':
                return chalk.yellow(text);
            case 'green':
                return chalk.green(text);
            case 'red':
                return chalk.red(text);
        }

        return text;
    }
};