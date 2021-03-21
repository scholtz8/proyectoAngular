export interface Pokemon {
        "id": number,
        "name": string,
        "base_experience": number,
        "height": number,
        "is_default": boolean,
        "order": number,
        "weight": number,
        "abilities": [string],
        "forms": [string],
        "location_area_encounters": string,
        "moves": [string],
        "species":  [string],
        "sprites":  Sprites,
        "stats":  [string],
        "types":  [string],
}

interface Sprites {
    "back_default": string,
    "back_female": string,
    "back_shiny": string,
    "back_shiny_female": string,
    "front_default": string,
    "front_female": string,
    "front_shiny": string,
    "front_shiny_female": string,
    "other": {
      "dream_world": {
        "front_default": string,
        "front_female": string,
      },
      "official-artwork": {
        "front_default": string,
      }
    }
}