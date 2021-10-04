var mainContent = document.querySelector(".content");
var allFish = [];
var allVillagers = [];

 "Admiral", "Agent S", "Agnes", "Al", "Alfonso", "Alice", "Alli", "Amelia", "Anabelle", "Anchovy", "Angus", "Anicotti", "Ankha", "Annalisa", "Annalise", "Antonio", "Apollo", "Apple", "Astrid", "Audie", "Aurora", "Ava", "Avery", "Axel", "Baabara", "Bam", "Bangle", "Barold", "Bea", "Beardo", "Beau", "Becky", "Bella", "Benedict", "Benjamin", "Bertha", "Bettina", "Bianca", "Biff", "Big Top", "Bill", "Billy", "Biskit", "Bitty", "Blaire", "Blanche", "Bluebear", "Bob", "Bonbon", "Bones", "Boomer", "Boone", "Boots", "Boris", "Boyd", "Bree", "Broccolo", "Broffina", "Bruce", "Bubbles", "Buck", "Bud", "Bunnie", "Butch", "Buzz", "Cally", "Camofrog", "Canberra", "Candi", "Carmen", "Caroline", "Carrie", "Cashmere", "Celia", "Cesar", "Chadder", "Charlise", "Cheri", "Cherry", "Chester", "Chevre", "Chief", "Chops", "Chow", "Chrissy", "Claude", "Claudia", "Clay", "Cleo", "Clyde", "Coach", "Cobb", "Coco", "Cole", "Colton", "Cookie", "Cousteau", "Cranston", "Croque", "Cube", "Curlos", "Curly", "Curt", "Cyd", "Cyrano", "Daisy", "Deena", "Deirdre", "Del", "Deli", "Derwin", "Diana", "Diva", "Dizzy", "Dobie", "Doc", "Dom", "Dora", "Dotty", "Drago", "Drake", "Drift", "Ed", "Egbert", "Elise", "Ellie", "Elmer", "Eloise", "Elvis", "Erik", "Eugene", "Eunice", "Fang", "Fauna", "Felicity", "Filbert", "Flip", "Flo", "Flora", "Flurry", "Francine", "Frank", "Freckles", "Freya", "Friga", "Frita", "Frobert", "Fuchsia", "Gabi", "Gala", "Gaston", "Gayle", "Genji", "Gigi", "Gladys", "Gloria", "Goldie", "Gonzo", "Goose", "Graham", "Greta", "Grizzly", "Groucho", "Gruff", "Gwen", "Hamlet", "Hamphrey", "Hans", "Harry", "Hazel", "Henry", "Hippeux", "Hopkins", "Hopper", "Hornsby", "Huck", "Hugh", "Iggly", "Ike", "Jacob", "Jacques", "Jambette", "Jay", "Jeremiah", "Jitters", "Joey", "Judy", "Julia", "Julian", "June", "Kabuki", "Katt", "Keaton", "Ken","Ketchup", "Kevin", "Kid Cat", "Kidd", "Kiki", "Kitt", "Kitty", "Klaus", "Knox", "Kody", "Kyle", "Leonardo", "Leopold", "Lily", "Limberg", "Lionel", "Lobo", "Lolly", "Lopez", "Louie", "Lucha", "Lucky", "Lucy", "Lyman", "Mac", "Maddie", "Maelle", "Maggie", "Mallary", "Maple", "Marcel", "Marcie", "Margie", "Marina", "Marshal", "Mathilda", "Megan", "Melba", "Merengue", "Merry", "Midge", "Mint", "Mira", "Miranda", "Mitzi", "Moe", "Molly", "Monique", "Monty", "Moose", "Mott", "Muffy", "Murphy", "Nan", "Nana", "Naomi", "Nate", "Nibbles", "Norma", "O'Hare", "Octavian", "Olaf", "Olive", "Olivia", "Opal", "Ozzie", "Pancetti", "Pango", "Paolo", "Papi", "Pashmina", "Pate", "Patty", "Paula", "Peaches", "Peanut", "Pecan", "Peck", "Peewee", "Peggy", "Pekoe", "Penelope", "Phil", "Phoebe", "Pierce", "Pietro", "Pinky", "Piper", "Pippy", "Plucky", "Pompom", "Poncho", "Poppy", "Portia", "Prince", "Puck", "Puddles", "Pudge", "Punchy", "Purrl", "Queenie", "Quillson", "Raddle", "Rasher", "Raymond", "Reneigh", "Renée", "Rex", "Rhonda", "Ribbot", "Ricky", "Rizzo", "Roald", "Robin", "Rocco", "Rocket", "Rod", "Rodeo", "Rodney", "Rolf", "Rooney", "Rory", "Roscoe", "Rosie", "Rowan", "Ruby", "Rudy", "Sally", "Samson", "Sandy", "Savannah", "Scoot", "Shari", "Sheldon", "Shep", "Sherb", "Simon", "Skye", "Sly", "Snake", "Snooty", "Soleil", "Sparro", "Spike", "Spork", "Sprinkle", "Sprocket", "Static", "Stella", "Sterling", "Stinky", "Stitches", "Stu", "Sydney", "Sylvana", "Sylvia", "T-Bone", "Tabby", "Tad", "Tammi", "Tammy", "Tangy", "Tank", "Tasha", "Teddy", "Tex", "Tia", "Tiffany", "Timbra", "Tipper", "Tom", "Truffles", "Tucker", "Tutu", "Twiggy", "Tybalt", "Ursala", "Velma", "Vesta", "Vic", "Victoria", "Violet", "Vivian", "Vladimir", "Wade", "Walker", "Walt", "Wart Jr.", "Weber", "Wendy", "Whitney", "Willow", "Winnie", "Wolfgang", "Yuka", "Zell", "Zucker"

function getFish(){
    var requestUrl = 'https://acnhapi.com/v1/fish/';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        var allData = data
        // generates all fishnames (hopefully without the "")
        var fishnames = Object.keys(allData);
        console.log(fishnames);
        // for-loop to create column of all fish names in table
        allFish.push(fishnames)
        for (var i = 0; i < fishnames.length; i++) {
            // creating a new row in the table
            var createRow = mainContent.insertRow(1);
            // create a cell in the name column of that row
            var nameCell = createRow.insertCell($("#header-name"));
            // populate the cell with content
            nameCell.innerHTML = fishnames[i]
        }
      });
}

function getVillagers(){
    var villagerUrl = 'https://www.instafluff.tv/ACDB/Villagers/' + villagerName + '.json'

    fetch(villagerUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}

getFish();
// getVillagers();