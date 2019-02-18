# Merge Files

## What it Does

A JavaScript script that reads in two text files, creates a third file, merges the first two into the third, and lists the output (content of what went into the third file).

## To Run

Run the command:

`npm start`

This will take the two files `1.txt` and `2.txt` and create a third file, `3.txt`, printing the content of the third file to the terminal. This simply concatenates the two into the third file.

To run the asynchronous version, which uses `fs.readFile()` instead of `fs.readFileSync()`, run the command:

`npm run start-async`

## To Start Over

Run the command:

`npm restart`

This will delete the third file: `3.txt`

## Running on repl.it

This code can be [run on repl.it here](https://repl.it/@wallacepreston/MergeFilesJs). 
