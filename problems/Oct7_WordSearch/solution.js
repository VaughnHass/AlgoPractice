/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    /*
        return true at any point if word is found, else continue:
        
            1) check all [] in board for word: check horizontal
            2) look for first letter in word 
                a) if not found by end, return false.
                b) if found, pass all found indexs to step 3
            
            3) check all directions from index trying to find next letter in word
                a) if not found, continue to next index found in step 2
                    - if no more found indexes left, return false
                b) if found, repeat step 3 starting at found index & looking for next letter in word
                    - maybe replace last index with some holder value & pass the changed list to function?
    */
    
    function checkHorizontal(board, word){
        //this really isnt needed, but it might be an optimization (early end case)    
    }
    
    function findFirstLetter(board, word){
        /*return 
            [[y, x]] if 1 found, 
            [[y0,x0], ...] if multiple found, 
            false if none
        */
        const firstLetter = word.charAt(0);
        let foundIndexes = []
        
        board.forEach((row, y) => {
            row.forEach((letter, x) => {
                if(letter == firstLetter) foundIndexes.push([y, x]);
            });
        });
        
        if(foundIndexes.length === 0) return false;
        return foundIndexes;
    }
    
    function findNextLetter(board, word, boardIndex, wordIndex){
        /*
            boardIndex = [y,x] cords of current letter location in board
            wordIndex = {int} index in word of current letter
            
            board[y][x] === word.charAt(wordIndex)
        */
        const y = boardIndex[0];
        const x = boardIndex[1];
        let nextLetter;
        
        //check if already at last index, else gets nextLetter to find
        if(wordIndex >= word.length - 1){
            return true;
        } else{
            nextLetter = word.charAt(wordIndex + 1);
        }    
        
        //check north (y-1)
            
            
        //check south (y+1)
            
            
        //check east (x+1)
            
            
        //check west (x-1)
            
            
    }
};