const pokemonCardList = document.querySelector('.cards');

function renderPokemonCards() {
    pokemonCardList.innerHTML = '';

    data.forEach(card => {
        const li = document.createElement('li');
        li.classList.add('card', 'card--hover');

        const h2 = document.createElement('h2');
        h2.className = 'card--text';
        h2.textContent = card.name.charAt(0).toUpperCase() + card.name.slice(1);

        li.appendChild(h2);

        const img = document.createElement('img');
        img.width = 256;
        img.className = 'card--img';
        img.src = card.sprites.other["official-artwork"].front_default;
        li.appendChild(img);

        const statList = document.createElement('ul');
        statList.className = 'card--text'

        const cardStats = card.stats;

        cardStats.forEach((stat) => {
          const newStat = document.createElement('li');
          newStat.className = 'card--text';
          newStat.textContent = `${stat.stat.name.toUpperCase()}: ${stat.base_stat}`;
          
          statList.appendChild(newStat);
        })
        li.appendChild(statList);

        const appearanceHeader = document.createElement('h3');
        appearanceHeader.textContent = 'Appeared On';
        li.appendChild(appearanceHeader);

        const appearances = document.createElement('p');
        const appearedOn = card.game_indices;
        appearedOn.forEach((appearance) => {
          const capitalizedVersionName = appearance.version.name.charAt(0).toUpperCase() + appearance.version.name.slice(1);
          const previousApperance = appearances.textContent;
          
          if (appearance === appearedOn[appearedOn.length -1]){
            appearances.textContent =  previousApperance + ` ${capitalizedVersionName}`;
          } else {
            appearances.textContent =  previousApperance + ` ${capitalizedVersionName},`;
          }
        })
        li.appendChild(appearances);

        pokemonCardList.appendChild(li);
    });
  };

renderPokemonCards();