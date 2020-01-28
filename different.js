let N= [1,2,3,3,4,5,6,6,6,6];var count = 0;let twins = [];
for (i in N)
{if (N[i-1] != N[i]) 
{count = count+=1;}
else {twins.push(N[i])}}
console.log(`Chiffre différents l'un de l'autre : ${count}\nCes chiffres avaient un ou plusieurs jumeaux : ${twins.join(',')}`)