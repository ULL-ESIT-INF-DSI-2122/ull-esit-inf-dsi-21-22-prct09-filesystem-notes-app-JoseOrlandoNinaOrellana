import 'mocha';
import { expect } from 'chai';
import { Note } from '../src/Note';
import { NoteManager } from '../src/NoteManager';
import * as chalk from 'chalk';

describe('Note class tests', () => {
    let note = new Note('title', 'body', 'red');

    it('Instance test', () => {
        expect(note).instanceOf(Note);
    });
});

describe('NoteManager class tests', () => {
    let note = new Note('title', 'body', 'red');
    let manager = new NoteManager();

    it('exists function returns true', () => {
        expect(manager.exists('orlando', 'Note 2')).to.be.true;
    });

    it('readNote function returns ', () => {
        expect(manager.readNote('orlando', 'Note 1')).to.be.equal('\u001b[32mNote 1\u001b[39m\n\u001b[32mdo something\u001b[39m');
    });

    it('readNote function returns Note not found', () => {
        expect(manager.readNote('orlando', 'Note 99')).to.be.equal(chalk.red('Note not found'));
    });

    it('listNotes function', () => {
        expect(manager.listNotes('orlando')).to.be.equal('\u001b[32mYour notes\u001b[39m\n\u001b[32mNote 1\u001b[39m\n\u001b[33mNote 2\u001b[39m\n');
    });

    it('write funtion returns New note added!', () => {
        expect(manager.write('orlando', note)).to.be.equal('\u001b[32mNew note added!\u001b[39m');
    });

    it('write funtion returns Note title taken!', () => {
        expect(manager.write('orlando', new Note('Note 1', '', ''))).to.be.equal('\u001b[31mNote title taken!\u001b[39m');
    });

    it('remove function returns Note removed!', () => {
        expect(manager.removeNote('orlando', 'title')).to.be.equal('\u001b[32mNote removed!\u001b[39m');
    });

    it('remove function returns No note found', () => {
        expect(manager.removeNote('orlando', 'Note 99')).to.be.equal('\u001b[31mNo note found\u001b[39m');
    });

    it('putColor function test', () => {
        expect(manager.putColor('red', 'test')).to.be.equal('\u001b[31mtest\u001b[39m');
    })
});