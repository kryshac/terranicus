# Terranicus

**Enunţ** Neînfricatul călător Terranicus a intrat în posesia unei hărți, care descrie o regiune puțin explorată, cu râuri, păduri și mlaștini. Râurile separă regiunea în fragmente mai mici, unele conținând doar păduri (zone uscate), altele – păduri și mlaștini (zone umede) Înainte de a începe explorarea Terranicus dorește să determine care este suprafața celei mai mari ”zone uscate” din regiune.
Harta regiunii reprezintă un tablou bidimensional cu N linii și M coloane. Elementele tabloului descriu porțiuni elementare de relief și sunt numere întregi cu următoarea semnificație: 1 – (râu) apă , 2 – pădure, 3 – mlaștină. Un râu este format din toate celulele cu apă, luate astfel încât pentru fiecare celulă a râului există cel puțin o altă celulă vecină, conectată la cea curentă pe latură. O zonă este mărginită fie în totalitate de râuri, fie de râuri și marginea hărții.
Cerinţă: scrieţi un program care să determine suprafața celei mai mare ”zone uscate” de pe hartă.

**Input** din input-ul standard se citesc mai întâi două numere întregi: N, M; N – numărul de linii și M – numărul de coloane ale hărții. Se citesc apoi N linii a câte M numere naturale separate prin spaţii, reprezentând harta regiunii.

**Output** în output-ul standard va fi afișat un singur număr – dimensiunea celei mai mari zone uscate de pe hartă.

**Restricţii** 3 ≤ N, M ≤ 200.

# Exemplu

Imput
```5 5
3 3 1 3 2
3 2 1 1 1
2 2 1 2 2
1 1 1 1 2
3 1 3 1 2
```

Output
```4
```

Explicație
Pe hartă se observă 5 zone:
```3 3  3 2  2 2  3 3
3 2       2
2 2       2
```
Doar una dintre ele nu conține mlaștini. Ea are suprafața 4.

#### Execute

```sh
$ node index.js < input.txt
```

```sh
$ node index.js
5 5
3 3 1 3 2
3 2 1 1 1
2 2 1 2 2
1 1 1 1 2
3 1 3 1 2
```
