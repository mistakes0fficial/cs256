## CS256 File Integrity Checker

The CS256 File Integrity Checker is a Node.js command-line application that calculates the SHA256 hash of a given file and verifies its integrity by comparing it with an expected hash value.

### Installation

1. Clone this repository: `git clone https://github.com/mistakes0fficial/cs256.git`
2. Navigate to the project directory: `cd cs256`
3. Install the required dependencies: `npm install`

### Usage

1. Open a terminal window.
2. Navigate to the project directory if you're not already there.
3. Run the script using the command: `node index.js`
4. You will be prompted to enter the name of the file you want to check.
5. Enter the expected SHA256 hash value for the file.
6. The script will calculate the hash of the file and compare it with the expected value.
7. If the hashes match, it means the file has not been modified. If not, the script will indicate that the file has been modified.

### Example
```node
$ node index.js
```
Enter the name of the file: sample.txt
Enter the expected SHA256 hash: d4b7a7c9d8297e4c49e8aee5e548d6a94a5a88e04dfaca45d22fbf2d5da7aa0b
SHA256 hash of sample.txt: d4b7a7c9d8297e4c49e8aee5e548d6a94a5a88e04dfaca45d22fbf2d5da7aa0b
File has not been modified.


### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

### Author

Created by Mistakes333

Feel free to contribute and report any issues on [GitHub](https://github.com/mistakes0fficial/cs256).

