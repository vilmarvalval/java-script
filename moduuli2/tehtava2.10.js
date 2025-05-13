let candidates={}

//these are used for redoing the voting process if there's a tie and user wishes to do so.
let tiedCandidates=[]
let refference=0
let doVoting = true

//prompts user for the amount of candidates.
let candidateAmount = prompt("Give the number of candidates:")
//prompts user for name of candidates.
for(let i=0;i<candidateAmount;i++){
    let addCandidate =  prompt("Give the name of candidate "+(i+1)+":").toLowerCase()
    candidates[addCandidate]=0
    console.log('2.10: candidates: '+candidates)
}

//get keys of candidates to make a list of their names.
let candidateNames = Object.keys(candidates)
let candidatesString = ""
for(let i=0; i< candidateNames.length;i++){
    candidatesString += candidateNames[i].toUpperCase()+', '
}

let voterAmount= prompt("Give number of voters:")

//voting process
function doVotes(){
    for (let i=0;i<voterAmount;i++){
        let vote= prompt("Voter "+(i+1)+". Select who to vote for from the following list:\n" +
            ""+candidatesString.toLowerCase())
        candidates[vote]+=1
        console.log('2.10: candidate `'+vote+'` set to: '+candidates[vote])
    }
    console.log(candidateNames)
    //'counts' vote(s), winner is moved to the top of the array.
    candidateNames.sort((a,b)=>{
        console.log(a, b)
        return candidates[b] - candidates[a];
    })

    //If there is more than 2 ties:
    if(candidates[candidateNames[0]] === candidates[candidateNames[1]] && candidates[candidateNames[1]] === candidates[candidateNames[2]]){
        console.log("Its a tie!")

        //empties tiedCandidates incase a tie has happened before
        tiedCandidates.length=0
        //takes tied candidates and makes a list out of them
        for(let i=0;i<candidateNames.length;i++){
            if (candidates[candidateNames[i]] >= refference){
                tiedCandidates.push(candidateNames[i])
                refference = candidates[candidateNames[i]]
            }
        }
        let winners=""
        for(let i =0; i<tiedCandidates.length;i++){
            //checks if the candidate is the last or the second last of the list to add a dynamic 'and' to the end of the sting
            if(i===tiedCandidates.length-2){
                winners+=tiedCandidates[i]+" and "
            }else if(i===tiedCandidates.length-1) {
                winners+=tiedCandidates[i]
            }else{
                winners+=tiedCandidates[i]+", "
            }
        }
        console.log(winners+" all have "+candidates[tiedCandidates[0]]+" votes!")
        doVoting = confirm("Re-hold voting process?")

    //if there is a 2-way tie:
    } else if(candidates[candidateNames[0]] === candidates[candidateNames[1]]){
        console.log("It is a tie between " +candidateNames[0]+ " and "+candidateNames[1]+ ", both having "+candidates[candidateNames[0]]+" votes!\n" +
            "Results:")
        for(let i=0;i<candidateNames.length;i++){
            console.log(candidateNames[i]+": "+candidates[candidateNames[i]]+" votes.")
        }
        //empties tiedCandidates incase a tie has happened before
        tiedCandidates.length=0
         //takes tied candidates and makes a list out of them
        for(let i=0;i<candidateNames.length;i++){
            if (candidates[candidateNames[i]] >= refference){
                tiedCandidates.push(candidateNames[i])
                refference = candidates[candidateNames[i]]
            }
        }
        //asks if the user wants to hold another vote
        doVoting = confirm("Re-hold voting process?")
    } else {
            console.log("The winner is "+candidateNames[0]+ " with "+candidates[candidateNames[0]]+" votes!\n" +
            "Results:")
            for(let i=0;i<candidateNames.length;i++){
                console.log(candidateNames[i]+": "+candidates[candidateNames[i]]+" votes.")
            }
            doVoting=false
    }
}

while(doVoting){
    doVotes()
    //resets the votes and candidate names and then gives tiedCandidates as the new list
    Object.keys(candidates).length === 0
    candidatesString=""
    for(let i=0; i< tiedCandidates.length;i++){
        candidatesString += tiedCandidates[i].toUpperCase()+', '
    }
    for(let i=0;i<tiedCandidates.length;i++){
        candidates[tiedCandidates[i]]=0
    }
}