
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));

function getSentence(arr,INTER)
{
    const GAP   =" ";
    const Letter= {"S":".","Q":"?","E":"!"};
    let str   = "";

for (let i=0; i<arr.length; i ++) 
{      
    if (i < arr.length -1) {
        str += arr[i] + GAP;
    } else {
        switch (INTER) 
        {
            case "S":
                str += arr[i]  + Letter["S"];
                break;
            case "Q":
                 str += arr[i]  + Letter["Q"];
                break;
            case "E":
                str += arr[i]  + Letter["E"];
                break;
            default:
            
                break;
        }
    }

}

return str;
 
    }

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
};