let random = Math.floor(Math.random() * 151) + 1;

axios.get(`https://pokeapi.co/api/v2/pokemon-species/${random}`)
    .then(response => {
        let entries = response.data.flavor_text_entries;
        let pokemonDesc = entries.find(entry => entry.language.name === "en" && entry.version.name === "red");
        let pokemonName = response.data.name;
        let pokemonNum = response.data.id;

        document.getElementById("pokemonName").innerHTML = pokemonName;
        document.getElementById("pokemonName").innerHTML += " #" + pokemonNum;

        if (pokemonDesc) {
            document.getElementById("desc").innerHTML = pokemonDesc.flavor_text;
        } else {
            document.getElementById("desc").innerHTML = "No description found in English for version Red.";
        }
        axios.get(`https://pokeapi.co/api/v2/pokemon/${random}`)
            .then(spriteResponse => {
                let pokemonImg = spriteResponse.data.sprites.front_default;
                if (pokemonImg) {
                    document.getElementById("pokemons").style.backgroundImage = `url(${pokemonImg})`;
                } else {
                    document.getElementById("pokemons").innerText = "No image found.";
                }
            })
    })
