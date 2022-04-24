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
        expect(manager.readNote('orlando', 'Note 1')).to.be.equal(chalk.green('Note 1') + '\n' + chalk.green('do something'));
    });

    it('readNote function returns Note not found', () => {
        expect(manager.readNote('orlando', 'Note 99')).to.be.equal(chalk.red('Note not found'));
    });

    it('listNotes function', () => {
        expect(manager.listNotes('orlando')).to.be.equal(chalk.green('Your notes') + '\n' + chalk.green('Note 1') + '\n' + chalk.yellow('Note 2') + '\n');
    });

    it('write funtion returns New note added!', () => {
        expect(manager.write('orlando', note)).to.be.equal(chalk.green('New note added!'));
    });

    it('write funtion returns Note title taken!', () => {
        expect(manager.write('orlando', new Note('Note 1', '', ''))).to.be.equal(chalk.red('Note title taken!'));
    });

    it('remove function returns Note removed!', () => {
        expect(manager.removeNote('orlando', 'title')).to.be.equal(chalk.green('Note removed!'));
    });

    it('remove function returns No note found', () => {
        expect(manager.removeNote('orlando', 'Note 99')).to.be.equal(chalk.red('No note found'));
    });

    it('putColor function test', () => {
        expect(manager.putColor('red', 'test')).to.be.equal(chalk.red('test'));
    })
});