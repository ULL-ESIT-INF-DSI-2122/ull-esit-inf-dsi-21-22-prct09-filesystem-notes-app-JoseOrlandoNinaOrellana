import * as fs from 'fs';
import { Note } from './Note'

export class NoteList {
    exists(user: string, title: string): boolean {
        let notes: Note[] = this.read(user);

        for(const i in notes)
            if(notes[i].title === title)
                return true;
        
        return false;
    }

    read(user: string): Note[] {
        const file = fs.readFileSync('notes/' + user + '.json');
        return JSON.parse(file.toString());
    }

    write(user: string, note: Note) {
        if(!this.exists(user, note.title)) {
            let newNotes: Note[] = this.read(user);
            newNotes.push(note);
            fs.writeFileSync('notes/' + user + '.json', JSON.stringify(newNotes, null, 2) , 'utf-8');
        }
        else
            console.log('Note title taken!');
    }

    listNotes(user: string) {
        let notes: Note[] = this.read(user);
        notes.forEach((note: Note) => {
            console.log(note.title);
        });
    }

    readNote(user: string, title: string) {
        if(!this.exists(user, title)) {
            let notes: Note[] = this.read(user);
            notes.forEach((note: Note) => {
                if(note.title === title)
                {
                    console.log(note.title);
                    console.log(note.body);
                }
            });
        }
        else
            console.log('Note not found');
    }

    removeNote(user: string, title: string) {
        if(this.exists(user, title)) {
            let newNotes: Note[] = this.read(user);
            let index: number = newNotes.findIndex(note => note.title === title);
            newNotes.splice(index, 1);
            fs.writeFileSync('notes/' + user + '.json', JSON.stringify(newNotes, null, 2) , 'utf-8');
        }
        else
            console.log('No note found');
    }
};